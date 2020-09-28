import * as THREE from 'three';
export declare interface OrayShaderMaterialParam extends THREE.ShaderMaterialParameters {
    baseMaterial?: THREE.Material | THREE.Material[];
    albedo?: THREE.Vector3;
    emission?: THREE.Vector3;
    roughness?: number;
    metalness?: number;
    albedoMap?: THREE.Texture;
    emissionMap?: THREE.Texture;
    roughnessMap?: THREE.Texture;
    metalnessMap?: THREE.Texture;
    normalMap?: THREE.Texture;
}
export declare class Material extends THREE.ShaderMaterial {
    constructor(param?: OrayShaderMaterialParam);
    set albedo(value: THREE.Vector3);
    set emission(value: THREE.Vector3);
    set roughness(value: number);
    set metalness(value: number);
    /**
     *出力するマテリアルのタイプを指定します。
     *
     * @param {number} type 0=albedo 1=material 2=normal 3=depth
     * @memberof OrayTracingMaterial
     */
    setRenderType(type: number): void;
    get isOrayTracingMaterial(): boolean;
}
