import * as THREE from 'three';

import pathTracingFrag from './shaders/path-tracing.fs';
import screenVert from './shaders/screen.vs';
import screenFrag from './shaders/screen.fs';
import { Material } from '../Material';
import { GPUComputationController, GPUcomputationData, GPUComputationKernel } from '../../utils/GPUComputationController';

declare interface OrayRenderTargets {
	albedo: THREE.WebGLRenderTarget;
	emission: THREE.WebGLRenderTarget;
	material: THREE.WebGLRenderTarget;
	normal: THREE.WebGLRenderTarget;
	depth: THREE.WebGLRenderTarget;
	backNormal: THREE.WebGLRenderTarget;
	backDepth: THREE.WebGLRenderTarget;
}

export class Renderer extends GPUComputationController {

	private commonUniforms: any;

	private orayRenderTargets: OrayRenderTargets;

	private renderKernel: GPUComputationKernel;
	private renderResultData: GPUcomputationData;

	private renderScene: THREE.Scene;
	private lights: THREE.Object3D;
	private screen: THREE.Mesh;

	constructor( renderer: THREE.WebGLRenderer, resolution: THREE.Vector2 ) {

		let res = resolution.clone();

		super( renderer, res );

		this.commonUniforms = THREE.UniformsUtils.merge( [ {
			backBuffer: {
				value: null
			},
			albedoBuffer: {
				value: null
			},
			emissionBuffer: {
				value: null
			},
			materialBuffer: {
				value: null
			},
			normalBuffer: {
				value: null
			},
			depthBuffer: {
				value: null
			},
			backNormalBuffer: {
				value: null
			},
			backDepthBuffer: {
				value: null
			},
			renderResult: {
				value: null
			},
			cameraMatrixWorld: {
				value: null
			},
			cameraMatrixWorldInverse: {
				value: null
			},
			cameraProjectionMatrixInverse: {
				value: null
			},
			cameraProjectionMatrix: {
				value: null
			},
			envMap: {
				value: null
			},
			background: {
				value: new THREE.Vector3( 1.0, 1.0, 1.0 )
			},
			frame: {
				value: 0
			},
			dofBlurRadius: {
				value: 0
			},
			focalDistance: {
				value: 10.0
			}
		}, THREE.UniformsLib.lights ] );

		this.init();

	}

	public init() {

		this.lights = new THREE.Object3D();
		this.scene.add( this.lights );

		this.renderKernel = this.createKernel( {
			fragmentShader: pathTracingFrag,
			uniforms: this.commonUniforms,
			lights: true
		} );

		this.renderResultData = this.createData();

		this.createRenderTargets();

		this.renderScene = new THREE.Scene();
		this.screen = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), new THREE.ShaderMaterial( {
			vertexShader: screenVert,
			fragmentShader: screenFrag,
			uniforms: this.commonUniforms
		} ) );

		this.renderScene.add( this.screen );

	}

	public set focalDistance( value: number ) {

		this.commonUniforms.focalDistance.value = value;

	}

	public set dofBlurRadius( value: number ) {

		this.commonUniforms.dofBlurRadius.value = value;

	}

	private createRenderTargets() {

		this.orayRenderTargets = {
			albedo: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
			} ),
			emission: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
				type: THREE.HalfFloatType
			} ),
			material: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
			} ),
			normal: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
				type: THREE.FloatType,
			} ),
			depth: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
				type: THREE.FloatType,
			} ),
			backNormal: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
				type: THREE.FloatType,
			} ),
			backDepth: new THREE.WebGLRenderTarget( 0, 0, {
				magFilter: THREE.NearestFilter,
				minFilter: THREE.NearestFilter,
				type: THREE.FloatType,
			} ),
		};

		this.resize( this.dataSize );

	}

	private updateLights( scene: THREE.Scene ) {

		for ( let i = this.lights.children.length - 1; i >= 0; i -- ) {

			this.lights.remove( this.lights.children[ i ] );

		}

		scene.traverse( ( obj ) => {

			if ( ( obj as THREE.Light ).isLight ) {

				let wPos = obj.getWorldPosition( new THREE.Vector3() );
				let wQua = obj.getWorldQuaternion( new THREE.Quaternion() );

				let light = ( obj as THREE.Light ).clone();
				light.position.copy( wPos );
				light.quaternion.copy( wQua );

				this.lights.add( light );

			}

		} );

	}

	public render( scene: THREE.Scene, camera: THREE.PerspectiveCamera ) {

		let renderTargetMem = this.renderer.getRenderTarget();

		if ( this.commonUniforms.frame.value == 0 ) {

			let background = scene.background;
			scene.background = null;

			let keys = Object.keys( this.orayRenderTargets );

			for ( let i = 0; i < keys.length; i ++ ) {
				
				scene.traverse( ( obj ) => {

					if ( ( obj as THREE.Mesh ).isMesh && ( ( obj as THREE.Mesh ).material as any ).isOrayTracingMaterial ) {

						( ( obj as THREE.Mesh ).material as Material ).setRenderType( i );

					}

				} );

				this.renderer.setRenderTarget( this.orayRenderTargets[ keys[ i ] ] );

				this.renderer.render( scene, camera );

				this.commonUniforms[ keys[ i ] + 'Buffer' ].value = this.orayRenderTargets[ keys[ i ] ].texture;

			}

			scene.background = background;

			this.updateLights( scene );

		}

		this.renderer.setRenderTarget( renderTargetMem );

		this.commonUniforms.backBuffer.value = this.renderResultData.buffer.texture;
		this.commonUniforms.cameraMatrixWorld.value = camera.matrixWorld;
		this.commonUniforms.cameraMatrixWorldInverse.value = camera.matrixWorldInverse;
		this.commonUniforms.cameraProjectionMatrix.value = camera.projectionMatrix;
		this.commonUniforms.cameraProjectionMatrixInverse.value = camera.projectionMatrixInverse;

		if ( scene.background ) {

			if ( ( scene.background as THREE.Texture ).isTexture ) {

				this.commonUniforms.envMap.value = scene.background;

			} else {

				this.commonUniforms.background.value.copy( scene.background );

			}

		}

		this.compute( this.renderKernel, this.renderResultData, camera );

		this.commonUniforms.renderResult.value = this.renderResultData.buffer.texture;

		this.renderer.render( this.renderScene, camera );

		this.commonUniforms.frame.value ++;

	}

	public resetFrame() {

		this.commonUniforms.frame.value = 0;

	}

	public resize( resolution: THREE.Vector2 ) {

		this.resizeData( resolution );

		this.orayRenderTargets.albedo.setSize( this.dataSize.x, this.dataSize.y );
		this.orayRenderTargets.emission.setSize( this.dataSize.x, this.dataSize.y );
		this.orayRenderTargets.material.setSize( this.dataSize.x, this.dataSize.y );
		this.orayRenderTargets.normal.setSize( this.dataSize.x, this.dataSize.y );
		this.orayRenderTargets.depth.setSize( this.dataSize.x, this.dataSize.y );
		this.orayRenderTargets.backNormal.setSize( this.dataSize.x, this.dataSize.y );
		this.orayRenderTargets.backDepth.setSize( this.dataSize.x, this.dataSize.y );

	}

}
