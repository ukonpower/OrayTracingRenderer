var OrayTracingRenderer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/Material/index.ts":
/*!************************************!*\
  !*** ./src/core/Material/index.ts ***!
  \************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Material\", function() { return Material; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_orayTracingMaterial_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/orayTracingMaterial.vs */ \"./src/core/Material/shaders/orayTracingMaterial.vs\");\n/* harmony import */ var _shaders_orayTracingMaterial_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/orayTracingMaterial.fs */ \"./src/core/Material/shaders/orayTracingMaterial.fs\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar Material = /** @class */ (function (_super) {\n    __extends(Material, _super);\n    function Material(param) {\n        var _this = this;\n        param = param || {};\n        param.fragmentShader = param.fragmentShader || _shaders_orayTracingMaterial_fs__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        param.vertexShader = param.vertexShader || _shaders_orayTracingMaterial_vs__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        param.uniforms = param.uniforms || {};\n        if (param.uniforms.renderType) {\n            console.warn('\"renderType\" uniform cannnot be used.');\n        }\n        param.uniforms.renderType = { value: 0 };\n        var baseMat = param.baseMaterial && param.baseMaterial.length == undefined && param.baseMaterial;\n        var albedoMap = param.albedoMap || baseMat && baseMat.map;\n        var roughnessMap = param.roughnessMap || baseMat && baseMat.roughnessMap;\n        var metalnessMap = param.metalnessMap || baseMat && baseMat.metalnessMap;\n        var normalMap = param.normalMap || baseMat && baseMat.normalMap;\n        var emissionMap = param.emissionMap && baseMat && baseMat.emissiveMap;\n        param.defines = {\n            \"USE_ALBEDOMAP\": (albedoMap != null) && param.albedo == null,\n            \"USE_ROUGHNESSMAP\": (roughnessMap != null) && param.roughness == null,\n            \"USE_METALNESSMAP\": (metalnessMap != null) && param.metalness == null,\n            \"USE_NORMALMAP\": (normalMap != null),\n            \"USE_EMISSIONMAP\": (emissionMap != null) && param.emission == null,\n        };\n        param.uniforms.albedo = { value: param.albedo || (baseMat ? baseMat.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0)) };\n        param.uniforms.emission = { value: param.emission || (baseMat ? baseMat.emissive : new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0)) };\n        param.uniforms.roughness = { value: param.roughness || (baseMat ? baseMat.roughness : 0.0) };\n        param.uniforms.metalness = { value: param.metalness || (baseMat ? baseMat.metalness : 0.0) };\n        param.uniforms.albedoMap = { value: albedoMap };\n        param.uniforms.emissionMap = { value: emissionMap };\n        param.uniforms.roughnessMap = { value: roughnessMap };\n        param.uniforms.metalnessMap = { value: metalnessMap };\n        param.uniforms.normalMap = { value: normalMap };\n        if (param.extensions) {\n            param.extensions.derivatives = true;\n        }\n        else {\n            param.extensions = {\n                derivatives: true\n            };\n        }\n        delete param.baseMaterial;\n        delete param.albedo;\n        delete param.roughness;\n        delete param.metalness;\n        delete param.emission;\n        delete param.albedoMap;\n        delete param.roughnessMap;\n        delete param.metalnessMap;\n        delete param.emissionMap;\n        _this = _super.call(this, param) || this;\n        return _this;\n    }\n    Object.defineProperty(Material.prototype, \"albedo\", {\n        set: function (value) {\n            this.uniforms.albedo.value.copy(value);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Material.prototype, \"emission\", {\n        set: function (value) {\n            this.uniforms.emission.value = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Material.prototype, \"roughness\", {\n        set: function (value) {\n            this.uniforms.roughness.value = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Material.prototype, \"metalness\", {\n        set: function (value) {\n            this.uniforms.metalness.value = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    /**\n     *出力するマテリアルのタイプを指定します。\n     *\n     * @param {number} type 0=albedo 1=material 2=normal 3=depth\n     * @memberof OrayTracingMaterial\n     */\n    Material.prototype.setRenderType = function (type) {\n        this.uniforms.renderType.value = type;\n        this.side = type >= 5 ? three__WEBPACK_IMPORTED_MODULE_0__[\"BackSide\"] : three__WEBPACK_IMPORTED_MODULE_0__[\"FrontSide\"];\n    };\n    Object.defineProperty(Material.prototype, \"isOrayTracingMaterial\", {\n        get: function () {\n            return true;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Material;\n}(three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]));\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Material/index.ts?");

/***/ }),

/***/ "./src/core/Material/shaders/orayTracingMaterial.fs":
/*!**********************************************************!*\
  !*** ./src/core/Material/shaders/orayTracingMaterial.fs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nuniform float renderType;\\nuniform vec3 albedo;\\nuniform vec3 emission;\\nuniform float roughness;\\nuniform float metalness;\\nuniform mat3 normalMatrix;\\n\\nuniform sampler2D albedoMap;\\nuniform sampler2D roughnessMap;\\nuniform sampler2D metalnessMap;\\nuniform sampler2D normalMap;\\n\\nvarying vec2 vUv;\\nvarying vec3 vNormal;\\nvarying float vDepth;\\nvarying vec4 vPos;\\nvarying vec3 vViewPosition;\\n\\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\\n\\n\\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See vec4(0.6,0.6,0.5333333333333333,0.5333333333333333)\\n\\n\\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\\n\\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\\n\\tvec2 st0 = dFdx( vUv.st );\\n\\tvec2 st1 = dFdy( vUv.st );\\n\\n\\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude\\n\\n\\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\\n\\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\\n\\tvec3 N = normalize( surf_norm );\\n\\n\\tmat3 tsn = mat3( S, T, N );\\n\\n\\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\n\\treturn normalize( tsn * mapN );\\n\\n}\\n\\nvoid main( void ) {\\n\\n\\tif( renderType == 0.0 ) {\\n\\n\\t\\t//albedo\\t\\t\\n\\t\\t#ifdef USE_ALBEDOMAP\\n\\n\\t\\t\\tgl_FragColor = texture2D( albedoMap, vUv );\\n\\n\\t\\t#else\\n\\t\\t\\n\\t\\t\\tgl_FragColor = vec4( albedo, 0.0 );\\n\\t\\t\\t\\n\\t\\t#endif\\n\\t\\t\\n\\t} else if ( renderType == 1.0 ) {\\n\\n\\t\\t//emission\\n\\t\\tgl_FragColor = vec4( emission, 0.0 );\\n\\t\\t\\n\\t} else if ( renderType == 2.0 ) {\\n\\n\\t\\t#ifdef USE_ROUGHNESSMAP\\n\\n\\t\\t\\tgl_FragColor.y = texture2D( roughnessMap, vUv ).y * roughness;\\n\\n\\t\\t#else\\n\\t\\t\\n\\t\\t\\tgl_FragColor.y = roughness;\\n\\t\\t\\t\\n\\t\\t#endif\\n\\n\\t\\t#ifdef USE_METALNESSMAP\\n\\n\\t\\t\\tgl_FragColor.z = texture2D( metalnessMap, vUv ).z * metalness;\\n\\n\\t\\t#else\\n\\t\\t\\n\\t\\t\\tgl_FragColor.z = metalness;\\n\\t\\t\\t\\n\\t\\t#endif\\n\\t\\t\\n\\t} else if ( renderType == 3.0 || renderType == 5.0 ) {\\n\\n\\t\\t//normal\\n\\n\\t\\t#ifdef USE_NORMALMAP\\n\\t\\t\\tvec3 normal = vNormal; \\n\\t\\t\\tnormal = normalize( normalMatrix * normal );\\n\\t\\t\\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\\n\\t\\t\\tmapN.xy *= 1.0;\\n\\n\\t\\t\\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\\n\\t\\t\\tgl_FragColor = vec4( normal * 0.5 + 0.5 , 0.0 );\\n\\n\\t\\t#else\\n\\t\\t\\n\\t\\t\\tgl_FragColor = vec4( vNormal * 0.5 + 0.5, 0.0 );\\n\\t\\t\\t\\n\\t\\t#endif\\n\\t\\t\\n\\t} else if ( renderType == 4.0 || renderType == 6.0 ) {\\n\\n\\t\\t//depth\\n\\t\\t// gl_FragColor = vec4( vec3( ( ( vPos.z / vPos.w ) + 1.0 ) / 2.0 ), vPos.w  );\\n\\t\\tgl_FragColor = vec4( vec3( vPos.z ), vPos.w  );\\n\\t\\t\\n\\t}\\n\\n\\t\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Material/shaders/orayTracingMaterial.fs?");

/***/ }),

/***/ "./src/core/Material/shaders/orayTracingMaterial.vs":
/*!**********************************************************!*\
  !*** ./src/core/Material/shaders/orayTracingMaterial.vs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nvarying vec2 vUv;\\nvarying vec3 vNormal;\\nvarying float vDepth;\\nvarying vec4 vPos;\\nvarying vec3 vViewPosition;\\n\\nvoid main( void ) {\\n\\n\\tvec3 pos = position;\\n\\n\\tvec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );\\n\\tgl_Position = projectionMatrix * mvPosition;\\n\\n\\tvUv = uv;\\n\\tvNormal = normal;\\n\\tvPos = gl_Position;\\n\\tvViewPosition = - mvPosition.xyz;\\n\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Material/shaders/orayTracingMaterial.vs?");

/***/ }),

/***/ "./src/core/Renderer/index.ts":
/*!************************************!*\
  !*** ./src/core/Renderer/index.ts ***!
  \************************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_path_tracing_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/path-tracing.fs */ \"./src/core/Renderer/shaders/path-tracing.fs\");\n/* harmony import */ var _shaders_screen_vs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/screen.vs */ \"./src/core/Renderer/shaders/screen.vs\");\n/* harmony import */ var _shaders_screen_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/screen.fs */ \"./src/core/Renderer/shaders/screen.fs\");\n/* harmony import */ var _utils_GPUComputationController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/GPUComputationController */ \"./src/utils/GPUComputationController/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\nvar Renderer = /** @class */ (function (_super) {\n    __extends(Renderer, _super);\n    function Renderer(renderer, resolution) {\n        var _this = this;\n        var res = resolution.clone();\n        _this = _super.call(this, renderer, res) || this;\n        _this.commonUniforms = {\n            backBuffer: {\n                value: null\n            },\n            albedoBuffer: {\n                value: null\n            },\n            emissionBuffer: {\n                value: null\n            },\n            materialBuffer: {\n                value: null\n            },\n            normalBuffer: {\n                value: null\n            },\n            depthBuffer: {\n                value: null\n            },\n            backNormalBuffer: {\n                value: null\n            },\n            backDepthBuffer: {\n                value: null\n            },\n            renderResult: {\n                value: null\n            },\n            cameraMatrixWorld: {\n                value: null\n            },\n            cameraMatrixWorldInverse: {\n                value: null\n            },\n            cameraProjectionMatrixInverse: {\n                value: null\n            },\n            cameraProjectionMatrix: {\n                value: null\n            },\n            envMap: {\n                value: null\n            },\n            background: {\n                value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](1.0, 1.0, 1.0)\n            },\n            frame: {\n                value: 0\n            },\n            dofRadius: {\n                value: 0.9\n            },\n            focalDistance: {\n                value: 10.0\n            }\n        };\n        _this.init();\n        return _this;\n    }\n    Renderer.prototype.init = function () {\n        this.renderKernel = this.createKernel(_shaders_path_tracing_fs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], this.commonUniforms);\n        this.renderResultData = this.createData();\n        this.createRenderTargets();\n        this.renderScene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.screen = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](2, 2), new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n            vertexShader: _shaders_screen_vs__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            fragmentShader: _shaders_screen_fs__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            uniforms: this.commonUniforms\n        }));\n        this.renderScene.add(this.screen);\n    };\n    Renderer.prototype.createRenderTargets = function () {\n        this.orayRenderTargets = {\n            albedo: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            }),\n            emission: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"HalfFloatType\"]\n            }),\n            material: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            }),\n            normal: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n            depth: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n            backNormal: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n            backDepth: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](0, 0, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n        };\n        this.resize(this.dataSize);\n    };\n    Renderer.prototype.render = function (scene, camera) {\n        var renderTargetMem = this.renderer.getRenderTarget();\n        if (this.commonUniforms.frame.value == 0) {\n            var background = scene.background;\n            scene.background = null;\n            var keys = Object.keys(this.orayRenderTargets);\n            var _loop_1 = function (i) {\n                scene.traverse(function (obj) {\n                    if (obj.isMesh && obj.material.isMaterial) {\n                        obj.material.setRenderType(i);\n                    }\n                });\n                this_1.renderer.setRenderTarget(this_1.orayRenderTargets[keys[i]]);\n                this_1.renderer.render(scene, camera);\n                this_1.commonUniforms[keys[i] + 'Buffer'].value = this_1.orayRenderTargets[keys[i]].texture;\n            };\n            var this_1 = this;\n            for (var i = 0; i < keys.length; i++) {\n                _loop_1(i);\n            }\n            scene.background = background;\n        }\n        this.renderer.setRenderTarget(renderTargetMem);\n        this.commonUniforms.backBuffer.value = this.renderResultData.buffer.texture;\n        this.commonUniforms.cameraMatrixWorld.value = camera.matrixWorld;\n        this.commonUniforms.cameraMatrixWorldInverse.value = camera.matrixWorldInverse;\n        this.commonUniforms.cameraProjectionMatrix.value = camera.projectionMatrix;\n        this.commonUniforms.cameraProjectionMatrixInverse.value = camera.projectionMatrixInverse;\n        if (scene.background) {\n            if (scene.background.isTexture) {\n                this.commonUniforms.envMap.value = scene.background;\n            }\n            else {\n                this.commonUniforms.background.value.copy(scene.background);\n            }\n        }\n        this.compute(this.renderKernel, this.renderResultData, camera);\n        this.commonUniforms.renderResult.value = this.renderResultData.buffer.texture;\n        this.renderer.render(this.renderScene, camera);\n        this.commonUniforms.frame.value++;\n    };\n    Renderer.prototype.resetFrame = function () {\n        this.commonUniforms.frame.value = 0;\n    };\n    Renderer.prototype.resize = function (resolution) {\n        this.resizeData(resolution);\n        this.orayRenderTargets.albedo.setSize(this.dataSize.x * 2, this.dataSize.y * 2);\n        this.orayRenderTargets.emission.setSize(this.dataSize.x * 1, this.dataSize.y * 1);\n        this.orayRenderTargets.material.setSize(this.dataSize.x * 1, this.dataSize.y * 1);\n        this.orayRenderTargets.normal.setSize(this.dataSize.x * 1, this.dataSize.y * 1);\n        this.orayRenderTargets.depth.setSize(this.dataSize.x * 2, this.dataSize.y * 2);\n        this.orayRenderTargets.backNormal.setSize(this.dataSize.x * 1, this.dataSize.y * 1);\n        this.orayRenderTargets.backDepth.setSize(this.dataSize.x * 2, this.dataSize.y * 2);\n    };\n    return Renderer;\n}(_utils_GPUComputationController__WEBPACK_IMPORTED_MODULE_4__[\"GPUComputationController\"]));\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/index.ts?");

/***/ }),

/***/ "./src/core/Renderer/shaders/path-tracing.fs":
/*!***************************************************!*\
  !*** ./src/core/Renderer/shaders/path-tracing.fs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nuniform mat4 cameraMatrixWorld;\\nuniform mat4 cameraMatrixWorldInverse;\\nuniform mat4 cameraProjectionMatrix;\\nuniform mat4 cameraProjectionMatrixInverse;\\nuniform mat4 projectionMatrix;\\n\\nuniform float focalDistance;\\nuniform float dofRadius;\\n\\nuniform float time;\\nuniform float frame;\\n\\nuniform sampler2D backBuffer;\\nuniform sampler2D albedoBuffer;\\nuniform sampler2D emissionBuffer;\\nuniform sampler2D materialBuffer;\\nuniform sampler2D normalBuffer;\\nuniform sampler2D depthBuffer;\\nuniform sampler2D backNormalBuffer;\\nuniform sampler2D backDepthBuffer;\\nuniform samplerCube envMap;\\n\\nvarying vec2 vUv;\\n\\n#define PI 3.14159265359\\n#define TPI 6.28318530718\\n#define HPI 1.57079632679\\n\\nfloat random(vec2 p){\\n\\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 43758.5453);\\n}\\n\\n#define MAX_BOUNCE 8\\n#define INF 1e+10\\n#define EPS 1e-5\\n\\nstruct Ray {\\n\\tvec3 origin;\\n\\tvec3 direction;\\n};\\n\\nstruct Material {\\n\\tvec3 albedo;\\n\\tvec3 emission;\\n\\tfloat roughness;\\n\\tfloat metalness;\\n};\\n\\nstruct Intersection {\\n\\tvec3 position;\\n\\tvec3 normal;\\n\\tvec3 nextPosition;\\n\\tbool hit;\\n\\tfloat distance;\\n\\tMaterial material;\\n};\\n\\nstruct Sphere {\\n\\tvec3 position;\\n\\tfloat radius;\\n\\tMaterial material;\\n};\\n\\nstruct Plane {\\n\\tvec3 position;\\n\\tvec3 normal;\\n\\tMaterial material;\\n};\\n\\nvec3 random3D( vec2 p, float seed ) {\\n\\n\\treturn vec3(\\n\\t\\trandom( p + seed ),\\n\\t\\trandom( p + seed + 100.0 ),\\n\\t\\trandom( p + seed + 303.2)\\n\\t);\\n\\t\\n}\\n\\n//http://project-asura.com/blog/archives/3124\\nvec3 ggx( Intersection intersection, Ray ray, vec2 noise )\\n{\\n\\n\\tvec3 normal = intersection.normal;\\n\\tfloat roughness = intersection.material.roughness;\\n\\n    float a = roughness * roughness;\\n\\n    float phi = 2.0 * PI * noise.x;\\n    float cosTheta = sqrt( ( 1.0  - noise.y ) / ( 1.0  + ( a * a - 1.0 ) * noise.y ) );\\n    float sinTheta = sqrt( 1.0  - cosTheta * cosTheta );\\n    \\n    vec3 H;\\n    H.x = sinTheta * cos( phi );\\n    H.y = sinTheta * sin( phi );\\n    H.z = cosTheta;\\n    \\n    vec3 upVector = abs( normal.z ) < 0.999 ? vec3( 0, 0, 1 ) : vec3( 1, 0, 0 );\\n    vec3 tangentX = normalize( cross( upVector , normal ) );\\n    vec3 tangentY = cross( normal, tangentX );\\n\\n    return reflect( ray.direction, tangentX * H.x + tangentY * H.y + normal * H.z );\\n\\n}\\n\\nvec3 diffuse( Intersection intersection, vec2 noise ) {\\n\\n\\tvec3 normal = intersection.normal;\\n\\t\\n\\tfloat r = sqrt( noise.x );\\n\\tfloat theta = TPI * noise.y;\\n\\n\\tvec3 tDir = vec3( r * cos( theta ), r * sin( theta ), sqrt( 1.0 - noise.x ) );\\n\\tvec3 tangent = normalize( cross( normal, abs( normal.x ) > EPS ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 ) ) );\\n\\tvec3 binormal = cross( tangent, normal );\\n\\t\\n\\treturn tangent * tDir.x + binormal * tDir.y + normal * tDir.z;\\n\\n}\\n\\n#define MAX_STEP 100\\n\\nbool checkIntersect( inout vec3 startPos, inout vec3 nextPos ) {\\n\\n\\treturn false;\\n\\t\\n}\\n\\nvec3 getScreenPos( vec3 p ) {\\n\\n\\tvec4 clip = cameraProjectionMatrix * vec4( p, 1.0 );\\n\\treturn ( clip / clip.w ).xyz;\\n\\n}\\n\\nint shootRay( inout Intersection intersection, inout Ray ray, int bounce ) {\\n\\n\\tintersection.hit = false;\\n\\tintersection.distance = INF;\\n\\tintersection.position = ray.origin;\\n\\n\\tfor( int i = 0; i < MAX_STEP; i++ ) {\\n\\t\\t\\n\\t\\tintersection.nextPosition = intersection.position + ray.direction * 0.5;\\n\\t\\tvec3 startPosClip;\\n\\t\\tvec3 nextPosClip;\\n\\t\\tvec2 nextPosUV;\\n\\t\\tvec4 texDepthFront;\\n\\t\\tvec4 texDepthBack;\\n\\t\\tfloat texDepthFrontClip;\\n\\t\\tfloat texDepthBackClip;\\n\\n\\t\\tfor( int j = 0; j < 1; j ++ ) {\\n\\n\\t\\t\\tstartPosClip = getScreenPos( intersection.position );\\n\\t\\t\\tnextPosClip = getScreenPos( intersection.nextPosition );\\n\\t\\t\\t\\n\\t\\t\\tnextPosUV = nextPosClip.xy * 0.5 + 0.5;\\n\\n\\t\\t\\ttexDepthFront = texture2D( depthBuffer, nextPosUV );\\n\\t\\t\\ttexDepthFrontClip = texDepthFront.x / texDepthFront.w;\\n\\n\\t\\t\\ttexDepthBack = texture2D( backDepthBuffer, nextPosUV );\\n\\t\\t\\ttexDepthBackClip = texDepthBack.x / texDepthBack.w;\\n\\n\\t\\t\\tif(\\n\\t\\t\\t\\t( nextPosClip.z >= texDepthFrontClip && startPosClip.z <= texDepthBackClip ) && texDepthFrontClip != 0.0 \\n\\t\\t\\t) {\\n\\n\\t\\t\\t\\tintersection.hit = true;\\n\\t\\t\\t\\tintersection.nextPosition = ( intersection.position + intersection.nextPosition ) / 2.0;\\n\\n\\t\\t\\t} else {\\n\\n\\t\\t\\t\\tif( j == 0 ) {\\n\\n\\t\\t\\t\\t\\tbreak;\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t} else {\\n\\n\\t\\t\\t\\t\\tvec3 nextPos = intersection.nextPosition + ( intersection.nextPosition - intersection.position ) / 2.0;\\n\\t\\t\\t\\t\\tintersection.position = intersection.nextPosition;\\n\\t\\t\\t\\t\\tintersection.nextPosition = nextPos;\\n\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t}\\n\\t\\t\\n\\t\\t}\\n\\n\\t\\tif( intersection.hit ) {\\n\\n\\t\\t\\tMaterial mat;\\n\\t\\t\\tmat.albedo = texture2D( albedoBuffer, nextPosUV ).xyz;\\n\\t\\t\\tmat.emission = texture2D( emissionBuffer, nextPosUV ).xyz;\\n\\t\\t\\t\\n\\t\\t\\tvec4 rmTex = texture2D( materialBuffer, nextPosUV );\\n\\t\\t\\tmat.roughness = rmTex.y;\\n\\t\\t\\tmat.metalness = rmTex.z;\\n\\t\\t\\tintersection.material = mat;\\n\\t\\t\\tintersection.normal = normalize( texture2D( normalBuffer, nextPosUV ).xyz * 2.0 - 1.0 );\\n\\t\\t\\tintersection.position = ( cameraProjectionMatrixInverse * vec4( (nextPosUV * 2.0 - 1.0) * texDepthFront.w, texDepthFrontClip, texDepthFront.w ) ).xyz;\\n\\t\\t\\tbreak;\\n\\t\\t\\t\\n\\t\\t}\\n\\n\\t\\tintersection.position = intersection.nextPosition;\\n\\n\\t}\\n\\n\\tif( intersection.hit ) {\\n\\n\\t\\tfloat seed =  frame * 0.001 + float( bounce );\\n\\t\\tvec2 noise = vec2( random( vUv + sin( seed ) ), random( vUv - cos( seed ) ) );\\n\\n\\t\\tray.origin = intersection.position;\\n\\n\\t\\tif( random( vUv * 10.0 + sin( time + float( frame ) + seed ) ) > 0.5 * ( 1.0 - intersection.material.roughness * ( 1.0 - intersection.material.metalness )  ) + intersection.material.metalness * 0.5 ) {\\n\\t\\t\\t\\n\\t\\t\\tray.direction = diffuse( intersection, noise );\\n\\t\\t\\t\\n\\t\\t\\treturn 0;\\n\\t\\t\\t\\n\\t\\t} else {\\n\\n\\t\\t\\tray.direction = ggx( intersection, ray, noise );\\n\\t\\t\\treturn 1;\\n\\n\\t\\t}\\n\\n\\t} else {\\n\\n\\t\\tvec4 rayDir = vec4( ray.direction, 1.0 ) * cameraMatrixWorldInverse;\\n\\t\\tintersection.material.emission = textureCube( envMap, rayDir.xyz, 0.0 ).xyz * 2.5;\\n\\n\\t}\\n\\n\\treturn 0;\\n\\n}\\n\\nvec3 radiance( inout Ray ray ) {\\n\\n\\tIntersection intersection;\\n\\n\\tfloat memMetalness[MAX_BOUNCE];\\n\\tvec3 memAlbedo[MAX_BOUNCE];\\n\\tvec3 memEmission[MAX_BOUNCE];\\n\\tint memDir[MAX_BOUNCE];\\n\\n\\tint bounce;\\n\\t\\n\\tfor ( int i = 0; i < MAX_BOUNCE; i++ ) {\\n\\n\\t\\tmemDir[i] = shootRay( intersection, ray, i );\\n\\t\\tmemAlbedo[i] = intersection.material.albedo;\\n\\t\\tmemEmission[i] = intersection.material.emission;\\n\\t\\tmemMetalness[i] = intersection.material.metalness;\\n\\n\\t\\tif( !intersection.hit ) {\\n\\n\\t\\t\\tbounce = i;\\n\\n\\t\\t\\tbreak;\\n\\t\\t\\t\\n\\t\\t}\\n\\t}\\n\\n\\tvec3 emission = memEmission[ MAX_BOUNCE - 1 ];\\n\\tvec3 col;\\n\\n\\tfor ( int i = MAX_BOUNCE -1; i >= 0 ; i-- ) {\\n\\n\\t\\tif ( memDir[ i ] > 0 ) {\\n\\n\\t\\t\\t//ggx\\n\\t\\t\\tcol *= mix( vec3( 1.0 ), memAlbedo[i], memMetalness[ i ] );\\n\\n\\t\\t} else {\\n\\t\\t\\t\\n\\t\\t\\t//diffuse\\n\\t\\t\\tcol *= mix( vec3( 0.0 ), memAlbedo[i], 1.0 - memMetalness[ i ] );\\n\\n\\t\\t}\\n\\n\\t\\tcol += memEmission[ i ];\\n\\n\\t}\\n\\n\\treturn col;\\n\\t\\n\\t\\n}\\n\\nvoid main( void ) {\\n\\t\\n\\tvec4 befTex = texture2D( backBuffer, vUv ) * min( frame, 1.0 ) ;\\n\\n\\tRay ray;\\n\\tray.origin = vec3( 0.0, 0.0, 0.0 );\\n\\tray.direction = ( cameraProjectionMatrixInverse * vec4( vUv * 2.0 - 1.0, 1.0, 1.0 ) ).xyz;\\n\\tray.direction = normalize( ray.direction );\\n\\n\\t//random\\n\\tfloat r1 = random( vUv + sin( frame * 0.1) );\\n\\tfloat r2 = random( vUv - cos( frame * 0.1 ) );\\n\\n\\t//anti-aliasing\\n\\t// ray.direction.xy += vec2( r1 * 2.0 - 1.0 , r2 * 2.0 - 1.0 ) * 0.001;\\n\\n\\t//DOF\\n\\tfloat t1 = TPI * r1;\\n\\tfloat t2 = r2;\\n\\tvec3 offset = vec3(cos(t1)*r2, sin(t1)*t2, 0.0) * dofRadius;\\n\\tvec3 p = ray.origin + ray.direction * (focalDistance);\\n\\tray.origin += offset;\\n\\tray.direction = normalize( p - ray.origin );\\n\\t\\n\\tvec4 o = vec4( ( befTex.xyz + radiance( ray ) ) , 1.0 );\\n\\n\\tgl_FragColor = o;\\n\\t\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/shaders/path-tracing.fs?");

/***/ }),

/***/ "./src/core/Renderer/shaders/screen.fs":
/*!*********************************************!*\
  !*** ./src/core/Renderer/shaders/screen.fs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nuniform float frame;\\nuniform sampler2D renderResult;\\n\\nvarying vec2 vUv;\\n\\nvoid main( void ) {\\n\\n\\tvec3 color = texture2D( renderResult, vUv ).xyz;\\n\\tcolor /= (frame + 1.0);\\n\\n\\tgl_FragColor = vec4( color, 1.0 );\\n\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/shaders/screen.fs?");

/***/ }),

/***/ "./src/core/Renderer/shaders/screen.vs":
/*!*********************************************!*\
  !*** ./src/core/Renderer/shaders/screen.vs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nvarying vec2 vUv;\\n\\nvoid main( void ) {\\n\\n\\tvec3 pos = position;\\n\\tgl_Position = vec4( pos, 1.0 );\\n\\n\\tvUv = vec2( uv.x, uv.y );\\n\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/shaders/screen.vs?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Renderer, Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Renderer */ \"./src/core/Renderer/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return _core_Renderer__WEBPACK_IMPORTED_MODULE_0__[\"Renderer\"]; });\n\n/* harmony import */ var _core_Material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Material */ \"./src/core/Material/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Material\", function() { return _core_Material__WEBPACK_IMPORTED_MODULE_1__[\"Material\"]; });\n\n\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/index.ts?");

/***/ }),

/***/ "./src/utils/GPUComputationController/index.ts":
/*!*****************************************************!*\
  !*** ./src/utils/GPUComputationController/index.ts ***!
  \*****************************************************/
/*! exports provided: GPUComputationController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GPUComputationController\", function() { return GPUComputationController; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_passThrough_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/passThrough.vs */ \"./src/utils/GPUComputationController/shaders/passThrough.vs\");\n/* harmony import */ var _shaders_passThrough_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/passThrough.fs */ \"./src/utils/GPUComputationController/shaders/passThrough.fs\");\n\n\n\nvar GPUComputationController = /** @class */ (function () {\n    function GPUComputationController(renderer, dataSize) {\n        this.renderTargets = [];\n        this.renderer = renderer;\n        this.dataSize = dataSize.clone();\n        this.uniforms = {\n            dataSize: {\n                value: this.dataSize\n            }\n        };\n        this.tempDataLinear = this.createData({\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"]\n        });\n        this.tempDataNear = this.createData({\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"]\n        });\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"Camera\"]();\n        this.materials = [];\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](2, 2));\n        this.scene.add(this.mesh);\n    }\n    Object.defineProperty(GPUComputationController.prototype, \"isSupported\", {\n        get: function () {\n            return this.renderer.extensions.get(\"OES_texture_float\");\n        },\n        enumerable: false,\n        configurable: true\n    });\n    GPUComputationController.prototype.createInitializeTexture = function () {\n        var a = new Float32Array(this.uniforms.dataSize.value.x * this.uniforms.dataSize.value.y * 4);\n        var texture = new three__WEBPACK_IMPORTED_MODULE_0__[\"DataTexture\"](a, this.uniforms.dataSize.value.x, this.uniforms.dataSize.value.y, three__WEBPACK_IMPORTED_MODULE_0__[\"RGBAFormat\"], three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"]);\n        texture.needsUpdate = true;\n        return texture;\n    };\n    GPUComputationController.prototype.createData = function (initTex_texParam, textureParam) {\n        var param = {\n            wrapS: three__WEBPACK_IMPORTED_MODULE_0__[\"ClampToEdgeWrapping\"],\n            wrapT: three__WEBPACK_IMPORTED_MODULE_0__[\"ClampToEdgeWrapping\"],\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            format: three__WEBPACK_IMPORTED_MODULE_0__[\"RGBAFormat\"],\n            type: (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) ? three__WEBPACK_IMPORTED_MODULE_0__[\"HalfFloatType\"] : three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            stencilBuffer: false,\n            depthBuffer: false\n        };\n        var initTex;\n        var customParam;\n        if (initTex_texParam) {\n            if (initTex_texParam.isDataTexture) {\n                initTex = initTex_texParam;\n                if (textureParam) {\n                    customParam = textureParam;\n                }\n            }\n            else {\n                customParam = initTex_texParam;\n            }\n        }\n        if (customParam) {\n            param.wrapS = customParam.wrapS || param.wrapS;\n            param.wrapT = customParam.wrapT || param.wrapT;\n            param.minFilter = customParam.minFilter || param.minFilter;\n            param.magFilter = customParam.magFilter || param.magFilter;\n            param.format = customParam.format || param.format;\n            param.type = customParam.type || param.type;\n            param.stencilBuffer = customParam.stencilBuffer || param.stencilBuffer;\n            param.depthBuffer = customParam.depthBuffer || param.depthBuffer;\n        }\n        var buf = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.uniforms.dataSize.value.x, this.uniforms.dataSize.value.y, param);\n        var data = { buffer: buf };\n        this.renderTargets.push(buf);\n        if (initTex) {\n            var initKernel = this.createKernel(_shaders_passThrough_fs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            initKernel.uniforms.tex = { value: initTex };\n            this.compute(initKernel, data);\n        }\n        return data;\n    };\n    GPUComputationController.prototype.createKernel = function (shader, uniforms) {\n        var uni = this.CopyUniforms({}, uniforms);\n        uni = this.CopyUniforms(uni, this.uniforms);\n        var mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n            vertexShader: _shaders_passThrough_vs__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            fragmentShader: shader,\n            uniforms: uni\n        });\n        this.materials.push(mat);\n        var kernel = {\n            material: mat,\n            uniforms: uni\n        };\n        return kernel;\n    };\n    GPUComputationController.prototype.compute = function (kernel, data, camera) {\n        var temp;\n        if (data.buffer.texture.magFilter == three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"]) {\n            temp = this.tempDataLinear;\n        }\n        else {\n            temp = this.tempDataNear;\n        }\n        this.mesh.material = kernel.material;\n        var currentRenderTarget = this.renderer.getRenderTarget();\n        this.renderer.setRenderTarget(temp.buffer);\n        this.renderer.render(this.scene, camera || this.camera);\n        this.swapBuffers(data, temp);\n        this.renderer.setRenderTarget(currentRenderTarget);\n    };\n    GPUComputationController.prototype.swapBuffers = function (b1, b2) {\n        var tmp = b1.buffer;\n        b1.buffer = b2.buffer;\n        b2.buffer = tmp;\n    };\n    GPUComputationController.prototype.dispose = function () {\n        var geo = this.mesh.geometry;\n        geo.dispose();\n        for (var i = 0; i < this.materials.length; i++) {\n            this.materials[i].dispose();\n        }\n        this.scene.remove(this.mesh);\n        this.tempDataLinear.buffer.dispose();\n        this.tempDataNear.buffer.dispose();\n    };\n    GPUComputationController.prototype.CopyUniforms = function (uni1, uni2) {\n        if (!uni1 || !uni2)\n            return uni1 || uni2;\n        var keys = Object.keys(uni2);\n        for (var i = 0; i < keys.length; i++) {\n            if (!uni1[keys[i]]) {\n                uni1[keys[i]] = uni2[keys[i]];\n            }\n        }\n        return uni1;\n    };\n    GPUComputationController.prototype.resizeData = function (dataSize) {\n        this.dataSize.copy(dataSize);\n        for (var i = 0; i < this.renderTargets.length; i++) {\n            var target = this.renderTargets[i];\n            target.setSize(dataSize.x, dataSize.y);\n        }\n    };\n    return GPUComputationController;\n}());\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/utils/GPUComputationController/index.ts?");

/***/ }),

/***/ "./src/utils/GPUComputationController/shaders/passThrough.fs":
/*!*******************************************************************!*\
  !*** ./src/utils/GPUComputationController/shaders/passThrough.fs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nuniform sampler2D tex;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    gl_FragColor = texture2D(tex,vUv);\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/utils/GPUComputationController/shaders/passThrough.fs?");

/***/ }),

/***/ "./src/utils/GPUComputationController/shaders/passThrough.vs":
/*!*******************************************************************!*\
  !*** ./src/utils/GPUComputationController/shaders/passThrough.vs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    gl_Position = vec4( position, 1.0 );\\n    vUv = uv;\\n}\");\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/utils/GPUComputationController/shaders/passThrough.vs?");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = THREE;\n\n//# sourceURL=webpack://OrayTracingRenderer/external_%22THREE%22?");

/***/ })

/******/ });


OrayTracingRenderer === undefined && console.error('esm-webpack-plugin: nothing exported!');
const _OrayTracingRenderer$Renderer = OrayTracingRenderer['Renderer'];
const _OrayTracingRenderer$Material = OrayTracingRenderer['Material'];

export {
    _OrayTracingRenderer$Renderer as Renderer,
    _OrayTracingRenderer$Material as Material
}