import * as THREE from 'three';
import { GPUComputationController } from '../../utils/GPUComputationController';
export declare class Renderer extends GPUComputationController {
    private commonUniforms;
    private orayRenderTargets;
    private renderKernel;
    private renderResultData;
    private renderScene;
    private screen;
    constructor(renderer: THREE.WebGLRenderer, resolution: THREE.Vector2);
    init(): void;
    render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void;
    resetFrame(): void;
}
