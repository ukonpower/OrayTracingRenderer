import * as THREE from 'three';

import orayTracingMaterialVert from './shaders/orayTracingMaterial.vs';
import orayTracingMaterialFrag from './shaders/orayTracingMaterial.fs';

export declare interface OrayShaderMaterialParam extends THREE.ShaderMaterialParameters {
	baseMaterial?: THREE.Material | THREE.Material[];
	albedo?: THREE.Vector3;
	emission?: THREE.Vector3
	roughness?: number;
	metalness?: number;
	albedoMap?: THREE.Texture;
	emissionMap?: THREE.Texture;
	roughnessMap?: THREE.Texture;
	metalnessMap?: THREE.Texture;
	normalMap?: THREE.Texture;
}

export class Material extends THREE.ShaderMaterial {

	constructor( param?: OrayShaderMaterialParam ) {

		param = param || {};

		param.fragmentShader = param.fragmentShader || orayTracingMaterialFrag;
		param.vertexShader = param.vertexShader || orayTracingMaterialVert;
		param.uniforms = param.uniforms || {};

		if ( param.uniforms.renderType ) {

			console.warn( '"renderType" uniform cannnot be used.' );

		}

		param.uniforms.renderType = { value: 0 };

		let baseMat = param.baseMaterial && ( param.baseMaterial as THREE.Material[] ).length == undefined && param.baseMaterial as THREE.MeshStandardMaterial;
		let albedoMap = param.albedoMap || baseMat && baseMat.map;
		let roughnessMap = param.roughnessMap || baseMat && baseMat.roughnessMap;
		let metalnessMap = param.metalnessMap || baseMat && baseMat.metalnessMap;
		let normalMap = param.normalMap || baseMat && baseMat.normalMap;
		let emissionMap = param.emissionMap && baseMat && baseMat.emissiveMap;

		param.defines = {
			"USE_ALBEDOMAP": ( albedoMap != null ) && param.albedo == null,
			"USE_ROUGHNESSMAP": ( roughnessMap != null ) && param.roughness == null,
			"USE_METALNESSMAP": ( metalnessMap != null ) && param.metalness == null,
			"USE_NORMALMAP": ( normalMap != null ),
			"USE_EMISSIONMAP": ( emissionMap != null ) && param.emission == null,
		};

		param.uniforms.albedo = { value: param.albedo || ( baseMat ? baseMat.color : new THREE.Vector3( 0, 0, 0 ) ) };
		param.uniforms.emission = { value: param.emission || ( baseMat ? baseMat.emissive : new THREE.Vector3( 0, 0, 0 ) ) };
		param.uniforms.roughness = { value: param.roughness || ( baseMat ? baseMat.roughness : 0.0 ) };
		param.uniforms.metalness = { value: param.metalness || ( baseMat ? baseMat.metalness : 0.0 ) };
		param.uniforms.albedoMap = { value: albedoMap };
		param.uniforms.emissionMap = { value: emissionMap };
		param.uniforms.roughnessMap = { value: roughnessMap };
		param.uniforms.metalnessMap = { value: metalnessMap };
		param.uniforms.normalMap = { value: normalMap };

		if ( param.extensions ) {

			param.extensions.derivatives = true;

		} else {

			param.extensions = {
				derivatives: true
			};

		}

		delete param.baseMaterial;
		delete param.albedo;
		delete param.roughness;
		delete param.metalness;
		delete param.emission;
		delete param.albedoMap;
		delete param.roughnessMap;
		delete param.metalnessMap;
		delete param.emissionMap;

		super( param );

	}

	public set albedo( value: THREE.Vector3 ) {

		this.uniforms.albedo.value.copy( value );

	}

	public set emission( value: THREE.Vector3 ) {

		this.uniforms.emission.value = value;

	}

	public set roughness( value: number ) {

		this.uniforms.roughness.value = value;

	}

	public set metalness( value: number ) {

		this.uniforms.metalness.value = value;

	}

	/**
	 *出力するマテリアルのタイプを指定します。
	 *
	 * @param {number} type 0=albedo 1=material 2=normal 3=depth
	 * @memberof OrayTracingMaterial
	 */
	public setRenderType( type: number ) {

		this.uniforms.renderType.value = type;

		this.side = type >= 5 ? THREE.BackSide : THREE.FrontSide;

	}

	public get isOrayTracingMaterial() {

		return true;

	}

}
