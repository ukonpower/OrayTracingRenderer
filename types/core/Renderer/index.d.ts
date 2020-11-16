import * as THREE from 'three';
import { GPUComputationController } from '../../utils/GPUComputationController';
export declare class Renderer extends GPUComputationController {
    private commonUniforms;
    private orayRenderTargets;
    private renderKernel;
    private renderResultData;
    private renderScene;
    private lights;
    private screen;
    constructor(renderer: THREE.WebGLRenderer, resolution: THREE.Vector2);
    init(): void;
    set focalDistance(value: number);
    set dofBlurRadius(value: number);
    private createRenderTargets;
    private updateLights;
    render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void;
    resetFrame(): void;
    resize(resolution: THREE.Vector2): void;
}
