(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("THREE"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE"], factory);
	else if(typeof exports === 'object')
		exports["OrayTracingRenderer"] = factory(require("THREE"));
	else
		root["OrayTracingRenderer"] = factory(root["THREE"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (function(modules) { // webpackBootstrap
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Material\", function() { return Material; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_oray_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/oray.vs */ \"./src/core/Material/shaders/oray.vs\");\n/* harmony import */ var _shaders_oray_vs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_oray_vs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_oray_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/oray.fs */ \"./src/core/Material/shaders/oray.fs\");\n/* harmony import */ var _shaders_oray_fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_oray_fs__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar Material = /** @class */ (function (_super) {\n    __extends(Material, _super);\n    function Material(param) {\n        var _this = this;\n        param = param || {};\n        param.fragmentShader = param.fragmentShader || _shaders_oray_fs__WEBPACK_IMPORTED_MODULE_2___default.a;\n        param.vertexShader = param.vertexShader || _shaders_oray_vs__WEBPACK_IMPORTED_MODULE_1___default.a;\n        param.uniforms = param.uniforms || {};\n        if (param.uniforms.renderType) {\n            console.warn('\"renderType\" uniform cannnot be used.');\n        }\n        param.uniforms.renderType = { value: 0 };\n        var baseMat = param.baseMaterial && param.baseMaterial.length == undefined && param.baseMaterial;\n        var albedoMap = param.albedoMap || baseMat && baseMat.map;\n        var roughnessMap = param.roughnessMap || baseMat && baseMat.roughnessMap;\n        var metalnessMap = param.metalnessMap || baseMat && baseMat.metalnessMap;\n        var normalMap = param.normalMap || baseMat && baseMat.normalMap;\n        var emissionMap = param.emissionMap && baseMat && baseMat.emissiveMap;\n        param.defines = {\n            \"USE_ALBEDOMAP\": (albedoMap != null) && param.albedo == null,\n            \"USE_ROUGHNESSMAP\": (roughnessMap != null) && param.roughness == null,\n            \"USE_METALNESSMAP\": (metalnessMap != null) && param.metalness == null,\n            \"USE_NORMALMAP\": (normalMap != null),\n            \"USE_EMISSIONMAP\": (emissionMap != null) && param.emission == null,\n        };\n        param.uniforms.albedo = { value: param.albedo || (baseMat ? baseMat.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0)) };\n        param.uniforms.emission = { value: param.emission || (baseMat ? baseMat.emissive : new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0)) };\n        param.uniforms.roughness = { value: param.roughness || (baseMat ? baseMat.roughness : 0.0) };\n        param.uniforms.metalness = { value: param.metalness || (baseMat ? baseMat.metalness : 0.0) };\n        param.uniforms.albedoMap = { value: albedoMap };\n        param.uniforms.emissionMap = { value: emissionMap };\n        param.uniforms.roughnessMap = { value: roughnessMap };\n        param.uniforms.metalnessMap = { value: metalnessMap };\n        param.uniforms.normalMap = { value: normalMap };\n        if (param.extensions) {\n            param.extensions.derivatives = true;\n        }\n        else {\n            param.extensions = {\n                derivatives: true\n            };\n        }\n        delete param.baseMaterial;\n        delete param.albedo;\n        delete param.roughness;\n        delete param.metalness;\n        delete param.emission;\n        delete param.albedoMap;\n        delete param.roughnessMap;\n        delete param.metalnessMap;\n        delete param.emissionMap;\n        _this = _super.call(this, param) || this;\n        return _this;\n    }\n    Object.defineProperty(Material.prototype, \"albedo\", {\n        set: function (value) {\n            this.uniforms.albedo.value.copy(value);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Material.prototype, \"emission\", {\n        set: function (value) {\n            this.uniforms.emission.value = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Material.prototype, \"roughness\", {\n        set: function (value) {\n            this.uniforms.roughness.value = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Material.prototype, \"metalness\", {\n        set: function (value) {\n            this.uniforms.metalness.value = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    /**\n     *出力するマテリアルのタイプを指定します。\n     *\n     * @param {number} type 0=albedo 1=material 2=normal 3=depth\n     * @memberof OrayTracingMaterial\n     */\n    Material.prototype.setRenderType = function (type) {\n        this.uniforms.renderType.value = type;\n        this.side = type >= 5 ? three__WEBPACK_IMPORTED_MODULE_0__[\"BackSide\"] : three__WEBPACK_IMPORTED_MODULE_0__[\"FrontSide\"];\n    };\n    Object.defineProperty(Material.prototype, \"isOrayTracingMaterial\", {\n        get: function () {\n            return true;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Material;\n}(three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]));\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Material/index.ts?");

/***/ }),

/***/ "./src/core/Material/shaders/oray.fs":
/*!*******************************************!*\
  !*** ./src/core/Material/shaders/oray.fs ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform float renderType;\\r\\nuniform vec3 albedo;\\r\\nuniform vec3 emission;\\r\\nuniform float roughness;\\r\\nuniform float metalness;\\r\\nuniform mat3 normalMatrix;\\r\\n\\r\\nuniform sampler2D albedoMap;\\r\\nuniform sampler2D roughnessMap;\\r\\nuniform sampler2D metalnessMap;\\r\\nuniform sampler2D normalMap;\\r\\n\\r\\nvarying vec2 vUv;\\r\\nvarying vec3 vNormal;\\r\\nvarying float vDepth;\\r\\nvarying vec4 vPos;\\r\\nvarying vec3 vViewPosition;\\r\\n\\r\\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\\r\\n\\r\\n\\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\\r\\n\\r\\n\\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\\r\\n\\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\\r\\n\\tvec2 st0 = dFdx( vUv.st );\\r\\n\\tvec2 st1 = dFdy( vUv.st );\\r\\n\\r\\n\\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude\\r\\n\\r\\n\\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\\r\\n\\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\\r\\n\\tvec3 N = normalize( surf_norm );\\r\\n\\r\\n\\tmat3 tsn = mat3( S, T, N );\\r\\n\\r\\n\\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\r\\n\\r\\n\\treturn normalize( tsn * mapN );\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\nvoid main( void ) {\\r\\n\\r\\n\\tif( renderType == 0.0 ) {\\r\\n\\r\\n\\t\\t//albedo\\t\\t\\r\\n\\t\\t#ifdef USE_ALBEDOMAP\\r\\n\\r\\n\\t\\t\\tgl_FragColor = texture2D( albedoMap, vUv );\\r\\n\\r\\n\\t\\t#else\\r\\n\\t\\t\\r\\n\\t\\t\\tgl_FragColor = vec4( albedo, 0.0 );\\r\\n\\t\\t\\t\\r\\n\\t\\t#endif\\r\\n\\t\\t\\r\\n\\t} else if ( renderType == 1.0 ) {\\r\\n\\r\\n\\t\\t//emission\\r\\n\\t\\tgl_FragColor = vec4( emission, 0.0 );\\r\\n\\t\\t\\r\\n\\t} else if ( renderType == 2.0 ) {\\r\\n\\r\\n\\t\\t#ifdef USE_ROUGHNESSMAP\\r\\n\\r\\n\\t\\t\\tgl_FragColor.y = texture2D( roughnessMap, vUv ).y * roughness;\\r\\n\\r\\n\\t\\t#else\\r\\n\\t\\t\\r\\n\\t\\t\\tgl_FragColor.y = roughness;\\r\\n\\t\\t\\t\\r\\n\\t\\t#endif\\r\\n\\r\\n\\t\\t#ifdef USE_METALNESSMAP\\r\\n\\r\\n\\t\\t\\tgl_FragColor.z = texture2D( metalnessMap, vUv ).z * metalness;\\r\\n\\r\\n\\t\\t#else\\r\\n\\t\\t\\r\\n\\t\\t\\tgl_FragColor.z = metalness;\\r\\n\\t\\t\\t\\r\\n\\t\\t#endif\\r\\n\\t\\t\\r\\n\\t} else if ( renderType == 3.0 || renderType == 5.0 ) {\\r\\n\\r\\n\\t\\t//normal\\r\\n\\r\\n\\t\\t#ifdef USE_NORMALMAP\\r\\n\\t\\t\\tvec3 normal = vNormal; \\r\\n\\t\\t\\tnormal = normalize( normalMatrix * normal );\\r\\n\\t\\t\\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\\r\\n\\t\\t\\tmapN.xy *= 1.0;\\r\\n\\r\\n\\t\\t\\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\\r\\n\\t\\t\\tgl_FragColor = vec4( normal * 0.5 + 0.5 , 0.0 );\\r\\n\\r\\n\\t\\t#else\\r\\n\\t\\t\\r\\n\\t\\t\\tgl_FragColor = vec4( vNormal * 0.5 + 0.5, 0.0 );\\r\\n\\t\\t\\t\\r\\n\\t\\t#endif\\r\\n\\t\\t\\r\\n\\t} else if ( renderType == 4.0 || renderType == 6.0 ) {\\r\\n\\r\\n\\t\\t//depth\\r\\n\\t\\t// gl_FragColor = vec4( vec3( ( ( vPos.z / vPos.w ) + 1.0 ) / 2.0 ), vPos.w  );\\r\\n\\t\\tgl_FragColor = vec4( vec3( vPos.z ), vPos.w  );\\r\\n\\t\\t\\r\\n\\t}\\r\\n\\r\\n\\t\\r\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Material/shaders/oray.fs?");

/***/ }),

/***/ "./src/core/Material/shaders/oray.vs":
/*!*******************************************!*\
  !*** ./src/core/Material/shaders/oray.vs ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\r\\nvarying vec3 vNormal;\\r\\nvarying float vDepth;\\r\\nvarying vec4 vPos;\\r\\nvarying vec3 vViewPosition;\\r\\n\\r\\nvoid main( void ) {\\r\\n\\r\\n\\tvec3 pos = position;\\r\\n\\r\\n\\tvec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );\\r\\n\\tgl_Position = projectionMatrix * mvPosition;\\r\\n\\r\\n\\tvUv = uv;\\r\\n\\tvNormal = normal;\\r\\n\\tvPos = gl_Position;\\r\\n\\tvViewPosition = - mvPosition.xyz;\\r\\n\\r\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Material/shaders/oray.vs?");

/***/ }),

/***/ "./src/core/Renderer/index.ts":
/*!************************************!*\
  !*** ./src/core/Renderer/index.ts ***!
  \************************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_path_tracing_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/path-tracing.fs */ \"./src/core/Renderer/shaders/path-tracing.fs\");\n/* harmony import */ var _shaders_path_tracing_fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_path_tracing_fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_screen_vs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/screen.vs */ \"./src/core/Renderer/shaders/screen.vs\");\n/* harmony import */ var _shaders_screen_vs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_screen_vs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_screen_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/screen.fs */ \"./src/core/Renderer/shaders/screen.fs\");\n/* harmony import */ var _shaders_screen_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_screen_fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_GPUComputationController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/GPUComputationController */ \"./src/utils/GPUComputationController/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\nvar Renderer = /** @class */ (function (_super) {\n    __extends(Renderer, _super);\n    function Renderer(renderer, resolution) {\n        var _this = this;\n        var res = resolution.clone();\n        _this = _super.call(this, renderer, res) || this;\n        _this.commonUniforms = {\n            backBuffer: {\n                value: null\n            },\n            albedoBuffer: {\n                value: null\n            },\n            emissionBuffer: {\n                value: null\n            },\n            materialBuffer: {\n                value: null\n            },\n            normalBuffer: {\n                value: null\n            },\n            depthBuffer: {\n                value: null\n            },\n            backNormalBuffer: {\n                value: null\n            },\n            backDepthBuffer: {\n                value: null\n            },\n            renderResult: {\n                value: null\n            },\n            cameraMatrixWorld: {\n                value: null\n            },\n            cameraMatrixWorldInverse: {\n                value: null\n            },\n            cameraProjectionMatrixInverse: {\n                value: null\n            },\n            cameraProjectionMatrix: {\n                value: null\n            },\n            envMap: {\n                value: null\n            },\n            background: {\n                value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](1.0, 1.0, 1.0)\n            },\n            frame: {\n                value: 0\n            }\n        };\n        _this.init();\n        return _this;\n    }\n    Renderer.prototype.init = function () {\n        this.renderKernel = this.createKernel(_shaders_path_tracing_fs__WEBPACK_IMPORTED_MODULE_1___default.a, this.commonUniforms);\n        this.renderResultData = this.createData();\n        this.orayRenderTargets = {\n            albedo: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 2, this.dataSize.y * 2, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            }),\n            emission: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 1, this.dataSize.y * 1, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"HalfFloatType\"]\n            }),\n            material: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 1, this.dataSize.y * 1, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            }),\n            normal: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 1, this.dataSize.y * 1, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n            depth: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 2, this.dataSize.y * 2, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n            backNormal: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 1, this.dataSize.y * 1, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n            backDepth: new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.dataSize.x * 2, this.dataSize.y * 2, {\n                magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n                type: three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            }),\n        };\n        this.renderScene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.screen = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](2, 2), new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n            vertexShader: _shaders_screen_vs__WEBPACK_IMPORTED_MODULE_2___default.a,\n            fragmentShader: _shaders_screen_fs__WEBPACK_IMPORTED_MODULE_3___default.a,\n            uniforms: this.commonUniforms\n        }));\n        this.renderScene.add(this.screen);\n    };\n    Renderer.prototype.render = function (scene, camera) {\n        var renderTargetMem = this.renderer.getRenderTarget();\n        if (this.commonUniforms.frame.value == 0) {\n            var background = scene.background;\n            scene.background = null;\n            var keys = Object.keys(this.orayRenderTargets);\n            var _loop_1 = function (i) {\n                scene.traverse(function (obj) {\n                    if (obj.isMesh && obj.material.isMaterial) {\n                        obj.material.setRenderType(i);\n                    }\n                });\n                this_1.renderer.setRenderTarget(this_1.orayRenderTargets[keys[i]]);\n                this_1.renderer.render(scene, camera);\n                this_1.commonUniforms[keys[i] + 'Buffer'].value = this_1.orayRenderTargets[keys[i]].texture;\n            };\n            var this_1 = this;\n            for (var i = 0; i < keys.length; i++) {\n                _loop_1(i);\n            }\n            scene.background = background;\n        }\n        this.renderer.setRenderTarget(renderTargetMem);\n        this.commonUniforms.backBuffer.value = this.renderResultData.buffer.texture;\n        this.commonUniforms.cameraMatrixWorld.value = camera.matrixWorld;\n        this.commonUniforms.cameraMatrixWorldInverse.value = camera.matrixWorldInverse;\n        this.commonUniforms.cameraProjectionMatrix.value = camera.projectionMatrix;\n        this.commonUniforms.cameraProjectionMatrixInverse.value = camera.projectionMatrixInverse;\n        if (scene.background) {\n            if (scene.background.isTexture) {\n                this.commonUniforms.envMap.value = scene.background;\n            }\n            else {\n                this.commonUniforms.background.value.copy(scene.background);\n            }\n        }\n        this.compute(this.renderKernel, this.renderResultData, camera);\n        this.commonUniforms.renderResult.value = this.renderResultData.buffer.texture;\n        this.renderer.render(this.renderScene, camera);\n        this.commonUniforms.frame.value++;\n    };\n    Renderer.prototype.resetFrame = function () {\n        this.commonUniforms.frame.value = 0;\n    };\n    return Renderer;\n}(_utils_GPUComputationController__WEBPACK_IMPORTED_MODULE_4__[\"GPUComputationController\"]));\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/index.ts?");

/***/ }),

/***/ "./src/core/Renderer/shaders/path-tracing.fs":
/*!***************************************************!*\
  !*** ./src/core/Renderer/shaders/path-tracing.fs ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform vec2 dataSize;\\r\\nuniform mat4 cameraMatrixWorld;\\r\\nuniform mat4 cameraMatrixWorldInverse;\\r\\nuniform mat4 cameraProjectionMatrix;\\r\\nuniform mat4 cameraProjectionMatrixInverse;\\r\\nuniform mat4 projectionMatrix;\\r\\n\\r\\nuniform float roughness;\\r\\nuniform float metalness;\\r\\nuniform vec3 albedo;\\r\\n\\r\\nuniform float time;\\r\\nuniform float frame;\\r\\n\\r\\nuniform sampler2D backBuffer;\\r\\nuniform sampler2D albedoBuffer;\\r\\nuniform sampler2D emissionBuffer;\\r\\nuniform sampler2D materialBuffer;\\r\\nuniform sampler2D normalBuffer;\\r\\nuniform sampler2D depthBuffer;\\r\\nuniform sampler2D backNormalBuffer;\\r\\nuniform sampler2D backDepthBuffer;\\r\\nuniform samplerCube envMap;\\r\\n\\r\\nbool debug = false;\\r\\nvarying vec2 vUv;\\r\\n\\r\\n#define MAX_BOUNCE 8\\r\\n\\r\\n#define PI 3.14159265359\\n#define TPI 6.28318530718\\n#define HPI 1.57079632679\\n\\r\\n\\nfloat random(vec2 p){\\n\\treturn fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 43758.5453);\\n}\\r\\n\\r\\nconst float INF = 1e+10;\\r\\nconst float EPS = 1e-5;\\r\\n\\r\\nstruct Ray {\\r\\n\\tvec3 origin;\\r\\n\\tvec3 direction;\\r\\n};\\r\\n\\r\\nstruct Material {\\r\\n\\tvec3 albedo;\\r\\n\\tvec3 emission;\\r\\n\\tfloat roughness;\\r\\n\\tfloat metalness;\\r\\n};\\r\\n\\r\\nstruct Intersection {\\r\\n\\tvec3 position;\\r\\n\\tvec3 normal;\\r\\n\\tvec3 nextPosition;\\r\\n\\tbool hit;\\r\\n\\tfloat distance;\\r\\n\\tMaterial material;\\r\\n};\\r\\n\\r\\nstruct Sphere {\\r\\n\\tvec3 position;\\r\\n\\tfloat radius;\\r\\n\\tMaterial material;\\r\\n};\\r\\n\\r\\nstruct Plane {\\r\\n\\tvec3 position;\\r\\n\\tvec3 normal;\\r\\n\\tMaterial material;\\r\\n};\\r\\n\\r\\nvec3 random3D( vec2 p, float seed ) {\\r\\n\\r\\n\\treturn vec3(\\r\\n\\t\\trandom( p + seed ),\\r\\n\\t\\trandom( p + seed + 100.0 ),\\r\\n\\t\\trandom( p + seed + 303.2)\\r\\n\\t);\\r\\n\\t\\r\\n}\\r\\n\\r\\n//http://project-asura.com/blog/archives/3124\\r\\nvec3 ggx( Intersection intersection, Ray ray, vec2 noise )\\r\\n{\\r\\n\\r\\n\\tvec3 normal = intersection.normal;\\r\\n\\tfloat roughness = intersection.material.roughness;\\r\\n\\r\\n    float a = roughness * roughness;\\r\\n\\r\\n    float phi = 2.0 * PI * noise.x;\\r\\n    float cosTheta = sqrt( ( 1.0  - noise.y ) / ( 1.0  + ( a * a - 1.0 ) * noise.y ) );\\r\\n    float sinTheta = sqrt( 1.0  - cosTheta * cosTheta );\\r\\n    \\r\\n    vec3 H;\\r\\n    H.x = sinTheta * cos( phi );\\r\\n    H.y = sinTheta * sin( phi );\\r\\n    H.z = cosTheta;\\r\\n    \\r\\n    vec3 upVector = abs( normal.z ) < 0.999 ? vec3( 0, 0, 1 ) : vec3( 1, 0, 0 );\\r\\n    vec3 tangentX = normalize( cross( upVector , normal ) );\\r\\n    vec3 tangentY = cross( normal, tangentX );\\r\\n\\r\\n    return reflect( ray.direction, tangentX * H.x + tangentY * H.y + normal * H.z );\\r\\n\\r\\n}\\r\\n\\r\\nvec3 diffuse( Intersection intersection, vec2 noise ) {\\r\\n\\r\\n\\tvec3 normal = intersection.normal;\\r\\n\\t\\r\\n\\tfloat r = sqrt( noise.x );\\r\\n\\tfloat theta = TPI * noise.y;\\r\\n\\r\\n\\tvec3 tDir = vec3( r * cos( theta ), r * sin( theta ), sqrt( 1.0 - noise.x ) );\\r\\n\\tvec3 tangent = normalize( cross( normal, abs( normal.x ) > EPS ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 ) ) );\\r\\n\\tvec3 binormal = cross( tangent, normal );\\r\\n\\t\\r\\n\\treturn tangent * tDir.x + binormal * tDir.y + normal * tDir.z;\\r\\n\\r\\n}\\r\\n\\r\\n#define MAX_STEP 100\\r\\n\\r\\nbool checkIntersect( inout vec3 startPos, inout vec3 nextPos ) {\\r\\n\\r\\n\\treturn false;\\r\\n\\t\\r\\n}\\r\\n\\r\\nvec3 getScreenPos( vec3 p ) {\\r\\n\\r\\n\\tvec4 clip = cameraProjectionMatrix * vec4( p, 1.0 );\\r\\n\\treturn ( clip / clip.w ).xyz;\\r\\n\\r\\n}\\r\\n\\r\\nint shootRay( inout Intersection intersection, inout Ray ray, int bounce ) {\\r\\n\\r\\n\\tintersection.hit = false;\\r\\n\\tintersection.distance = INF;\\r\\n\\tintersection.position = ray.origin;\\r\\n\\r\\n\\tfor( int i = 0; i < MAX_STEP; i++ ) {\\r\\n\\t\\t\\r\\n\\t\\tintersection.nextPosition = intersection.position + ray.direction * 0.5;\\r\\n\\t\\tvec3 startPosClip;\\r\\n\\t\\tvec3 nextPosClip;\\r\\n\\t\\tvec2 nextPosUV;\\r\\n\\t\\tvec4 texDepthFront;\\r\\n\\t\\tvec4 texDepthBack;\\r\\n\\t\\tfloat texDepthFrontClip;\\r\\n\\t\\tfloat texDepthBackClip;\\r\\n\\r\\n\\t\\tfor( int j = 0; j < 1; j ++ ) {\\r\\n\\r\\n\\t\\t\\tstartPosClip = getScreenPos( intersection.position );\\r\\n\\t\\t\\tnextPosClip = getScreenPos( intersection.nextPosition );\\r\\n\\t\\t\\t\\r\\n\\t\\t\\tnextPosUV = nextPosClip.xy * 0.5 + 0.5;\\r\\n\\r\\n\\t\\t\\ttexDepthFront = texture2D( depthBuffer, nextPosUV );\\r\\n\\t\\t\\ttexDepthFrontClip = texDepthFront.x / texDepthFront.w;\\r\\n\\r\\n\\t\\t\\ttexDepthBack = texture2D( backDepthBuffer, nextPosUV );\\r\\n\\t\\t\\ttexDepthBackClip = texDepthBack.x / texDepthBack.w;\\r\\n\\r\\n\\t\\t\\tif(\\r\\n\\t\\t\\t\\t( nextPosClip.z >= texDepthFrontClip && startPosClip.z <= texDepthBackClip ) && texDepthFrontClip != 0.0 \\r\\n\\t\\t\\t) {\\r\\n\\r\\n\\t\\t\\t\\tintersection.hit = true;\\r\\n\\t\\t\\t\\tintersection.nextPosition = ( intersection.position + intersection.nextPosition ) / 2.0;\\r\\n\\r\\n\\t\\t\\t} else {\\r\\n\\r\\n\\t\\t\\t\\tif( j == 0 ) {\\r\\n\\r\\n\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\t\\r\\n\\t\\t\\t\\t} else {\\r\\n\\r\\n\\t\\t\\t\\t\\tvec3 nextPos = intersection.nextPosition + ( intersection.nextPosition - intersection.position ) / 2.0;\\r\\n\\t\\t\\t\\t\\tintersection.position = intersection.nextPosition;\\r\\n\\t\\t\\t\\t\\tintersection.nextPosition = nextPos;\\r\\n\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tif( intersection.hit ) {\\r\\n\\r\\n\\t\\t\\tMaterial mat;\\r\\n\\t\\t\\tmat.albedo = texture2D( albedoBuffer, nextPosUV ).xyz;\\r\\n\\t\\t\\tmat.emission = texture2D( emissionBuffer, nextPosUV ).xyz;\\r\\n\\t\\t\\t\\r\\n\\t\\t\\tvec4 rmTex = texture2D( materialBuffer, nextPosUV );\\r\\n\\t\\t\\tmat.roughness = rmTex.y;\\r\\n\\t\\t\\tmat.metalness = rmTex.z;\\r\\n\\t\\t\\tintersection.material = mat;\\r\\n\\t\\t\\tintersection.normal = normalize( texture2D( normalBuffer, nextPosUV ).xyz * 2.0 - 1.0 );\\r\\n\\t\\t\\tintersection.position = ( cameraProjectionMatrixInverse * vec4( (nextPosUV * 2.0 - 1.0) * texDepthFront.w, texDepthFrontClip, texDepthFront.w ) ).xyz;\\r\\n\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tintersection.position = intersection.nextPosition;\\r\\n\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\tif( intersection.hit ) {\\r\\n\\r\\n\\t\\tfloat seed =  frame * 0.001 + float( bounce );\\r\\n\\t\\tvec2 noise = vec2( random( vUv + sin( seed ) ), random( vUv - cos( seed ) ) );\\r\\n\\r\\n\\t\\tray.origin = intersection.position;\\r\\n\\r\\n\\t\\tif( random( vUv * 10.0 + sin( time + float( frame ) + seed ) ) > 0.5 * ( 1.0 - intersection.material.roughness * ( 1.0 - intersection.material.metalness )  ) + intersection.material.metalness * 0.5 ) {\\r\\n\\t\\t\\t\\r\\n\\t\\t\\tray.direction = diffuse( intersection, noise );\\r\\n\\t\\t\\t\\r\\n\\t\\t\\treturn 0;\\r\\n\\t\\t\\t\\r\\n\\t\\t} else {\\r\\n\\r\\n\\t\\t\\tray.direction = ggx( intersection, ray, noise );\\r\\n\\t\\t\\treturn 1;\\r\\n\\r\\n\\t\\t}\\r\\n\\r\\n\\t} else {\\r\\n\\r\\n\\t\\tvec4 rayDir = vec4( ray.direction, 1.0 ) * cameraMatrixWorldInverse;\\r\\n\\t\\tintersection.material.emission = textureCube( envMap, rayDir.xyz, 0.0 ).xyz * 2.5;\\r\\n\\r\\n\\t}\\r\\n\\r\\n\\treturn 0;\\r\\n\\r\\n}\\r\\n\\r\\nvec3 radiance( inout Ray ray ) {\\r\\n\\r\\n\\tIntersection intersection;\\r\\n\\r\\n\\tfloat memMetalness[MAX_BOUNCE];\\r\\n\\tvec3 memAlbedo[MAX_BOUNCE];\\r\\n\\tvec3 memEmission[MAX_BOUNCE];\\r\\n\\tint memDir[MAX_BOUNCE];\\r\\n\\r\\n\\tint bounce;\\r\\n\\t\\r\\n\\tfor ( int i = 0; i < MAX_BOUNCE; i++ ) {\\r\\n\\r\\n\\t\\tmemDir[i] = shootRay( intersection, ray, i );\\r\\n\\t\\tmemAlbedo[i] = intersection.material.albedo;\\r\\n\\t\\tmemEmission[i] = intersection.material.emission;\\r\\n\\t\\tmemMetalness[i] = intersection.material.metalness;\\r\\n\\r\\n\\t\\tif( !intersection.hit ) {\\r\\n\\r\\n\\t\\t\\tbounce = i;\\r\\n\\r\\n\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tvec3 emission = memEmission[ MAX_BOUNCE - 1 ];\\r\\n\\tvec3 col;\\r\\n\\r\\n\\tfor ( int i = MAX_BOUNCE -1; i >= 0 ; i-- ) {\\r\\n\\r\\n\\t\\tif ( memDir[ i ] > 0 ) {\\r\\n\\r\\n\\t\\t\\t//ggx\\r\\n\\t\\t\\tcol *= mix( vec3( 1.0 ), memAlbedo[i], memMetalness[ i ] );\\r\\n\\r\\n\\t\\t} else {\\r\\n\\t\\t\\t\\r\\n\\t\\t\\t//diffuse\\r\\n\\t\\t\\tcol *= mix( vec3( 0.0 ), memAlbedo[i], 1.0 - memMetalness[ i ] );\\r\\n\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tcol += memEmission[ i ];\\r\\n\\r\\n\\t}\\r\\n\\r\\n\\treturn col;\\r\\n\\t\\r\\n\\t\\r\\n}\\r\\n\\r\\nvoid main( void ) {\\r\\n\\t\\r\\n\\tvec4 befTex = texture2D( backBuffer, vUv ) * min( frame, 1.0 ) ;\\r\\n\\r\\n\\tRay ray;\\r\\n\\t// ray.origin = cameraPosition;\\r\\n\\t// ray.direction = ( cameraProjectionMatrixInverse * vec4( vUv * 2.0 - 1.0, 1.0, 1.0 ) ).xyz;\\r\\n\\t\\r\\n\\tray.origin = vec3( 0.0, 0.0, 0.0 );\\r\\n\\tray.direction = ( cameraProjectionMatrixInverse * vec4( vUv * 2.0 - 1.0, 1.0, 1.0 ) ).xyz;\\r\\n\\tray.direction.xy += vec2( random( vUv + time ) * 2.0 - 1.0 , random( vUv - time ) * 2.0 - 1.0 ) / max( dataSize.y,dataSize.x );\\r\\n\\tray.direction = normalize( ray.direction );\\r\\n\\r\\n\\tvec4 o = vec4( ( befTex.xyz + radiance( ray ) ) , 1.0 );\\r\\n\\tgl_FragColor = o;\\r\\n\\r\\n\\r\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/shaders/path-tracing.fs?");

/***/ }),

/***/ "./src/core/Renderer/shaders/screen.fs":
/*!*********************************************!*\
  !*** ./src/core/Renderer/shaders/screen.fs ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform float frame;\\r\\nuniform sampler2D renderResult;\\r\\n\\r\\nvarying vec2 vUv;\\r\\n\\r\\nvoid main( void ) {\\r\\n\\r\\n\\tvec3 color = texture2D( renderResult, vUv ).xyz;\\r\\n\\tcolor /= (frame + 1.0);\\r\\n\\r\\n\\tgl_FragColor = vec4( color, 1.0 );\\r\\n\\r\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/shaders/screen.fs?");

/***/ }),

/***/ "./src/core/Renderer/shaders/screen.vs":
/*!*********************************************!*\
  !*** ./src/core/Renderer/shaders/screen.vs ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\r\\n\\r\\nvoid main( void ) {\\r\\n\\r\\n\\tvec3 pos = position;\\r\\n\\tgl_Position = vec4( pos, 1.0 );\\r\\n\\r\\n\\tvUv = vec2( uv.x, uv.y );\\r\\n\\r\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/core/Renderer/shaders/screen.vs?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GPUComputationController\", function() { return GPUComputationController; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_passThrough_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/passThrough.vs */ \"./src/utils/GPUComputationController/shaders/passThrough.vs\");\n/* harmony import */ var _shaders_passThrough_vs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_passThrough_vs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_passThrough_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/passThrough.fs */ \"./src/utils/GPUComputationController/shaders/passThrough.fs\");\n/* harmony import */ var _shaders_passThrough_fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_passThrough_fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar GPUComputationController = /** @class */ (function () {\n    function GPUComputationController(renderer, dataSize) {\n        this.renderer = renderer;\n        this.dataSize = dataSize.clone();\n        this.uniforms = {\n            dataSize: {\n                value: dataSize.clone()\n            }\n        };\n        this.tempDataLinear = this.createData({\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"]\n        });\n        this.tempDataNear = this.createData({\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"]\n        });\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"Camera\"]();\n        this.materials = [];\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](2, 2));\n        this.scene.add(this.mesh);\n    }\n    Object.defineProperty(GPUComputationController.prototype, \"isSupported\", {\n        get: function () {\n            return this.renderer.extensions.get(\"OES_texture_float\");\n        },\n        enumerable: false,\n        configurable: true\n    });\n    GPUComputationController.prototype.createInitializeTexture = function () {\n        var a = new Float32Array(this.uniforms.dataSize.value.x * this.uniforms.dataSize.value.y * 4);\n        var texture = new three__WEBPACK_IMPORTED_MODULE_0__[\"DataTexture\"](a, this.uniforms.dataSize.value.x, this.uniforms.dataSize.value.y, three__WEBPACK_IMPORTED_MODULE_0__[\"RGBAFormat\"], three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"]);\n        texture.needsUpdate = true;\n        return texture;\n    };\n    GPUComputationController.prototype.createData = function (initTex_texParam, textureParam) {\n        var param = {\n            wrapS: three__WEBPACK_IMPORTED_MODULE_0__[\"ClampToEdgeWrapping\"],\n            wrapT: three__WEBPACK_IMPORTED_MODULE_0__[\"ClampToEdgeWrapping\"],\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"],\n            format: three__WEBPACK_IMPORTED_MODULE_0__[\"RGBAFormat\"],\n            type: (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) ? three__WEBPACK_IMPORTED_MODULE_0__[\"HalfFloatType\"] : three__WEBPACK_IMPORTED_MODULE_0__[\"FloatType\"],\n            stencilBuffer: false,\n            depthBuffer: false\n        };\n        var initTex;\n        var customParam;\n        if (initTex_texParam) {\n            if (initTex_texParam.isDataTexture) {\n                initTex = initTex_texParam;\n                if (textureParam) {\n                    customParam = textureParam;\n                }\n            }\n            else {\n                customParam = initTex_texParam;\n            }\n        }\n        if (customParam) {\n            param.wrapS = customParam.wrapS || param.wrapS;\n            param.wrapT = customParam.wrapT || param.wrapT;\n            param.minFilter = customParam.minFilter || param.minFilter;\n            param.magFilter = customParam.magFilter || param.magFilter;\n            param.format = customParam.format || param.format;\n            param.type = customParam.type || param.type;\n            param.stencilBuffer = customParam.stencilBuffer || param.stencilBuffer;\n            param.depthBuffer = customParam.depthBuffer || param.depthBuffer;\n        }\n        var buf = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](this.uniforms.dataSize.value.x, this.uniforms.dataSize.value.y, param);\n        var data = { buffer: buf };\n        if (initTex) {\n            var initKernel = this.createKernel(_shaders_passThrough_fs__WEBPACK_IMPORTED_MODULE_2___default.a);\n            initKernel.uniforms.tex = { value: initTex };\n            this.compute(initKernel, data);\n        }\n        return data;\n    };\n    GPUComputationController.prototype.createKernel = function (shader, uniforms) {\n        var uni = this.CopyUniforms({}, uniforms);\n        uni = this.CopyUniforms(uni, this.uniforms);\n        var mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n            vertexShader: _shaders_passThrough_vs__WEBPACK_IMPORTED_MODULE_1___default.a,\n            fragmentShader: shader,\n            uniforms: uni\n        });\n        this.materials.push(mat);\n        var kernel = {\n            material: mat,\n            uniforms: uni\n        };\n        return kernel;\n    };\n    GPUComputationController.prototype.compute = function (kernel, data, camera) {\n        var temp;\n        if (data.buffer.texture.magFilter == three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"]) {\n            temp = this.tempDataLinear;\n        }\n        else {\n            temp = this.tempDataNear;\n        }\n        this.mesh.material = kernel.material;\n        var currentRenderTarget = this.renderer.getRenderTarget();\n        this.renderer.setRenderTarget(temp.buffer);\n        this.renderer.render(this.scene, camera || this.camera);\n        this.swapBuffers(data, temp);\n        this.renderer.setRenderTarget(currentRenderTarget);\n    };\n    GPUComputationController.prototype.swapBuffers = function (b1, b2) {\n        var tmp = b1.buffer;\n        b1.buffer = b2.buffer;\n        b2.buffer = tmp;\n    };\n    GPUComputationController.prototype.dispose = function () {\n        var geo = this.mesh.geometry;\n        geo.dispose();\n        for (var i = 0; i < this.materials.length; i++) {\n            this.materials[i].dispose();\n        }\n        this.scene.remove(this.mesh);\n        this.tempDataLinear.buffer.dispose();\n        this.tempDataNear.buffer.dispose();\n    };\n    GPUComputationController.prototype.CopyUniforms = function (uni1, uni2) {\n        if (!uni1 || !uni2)\n            return uni1 || uni2;\n        var keys = Object.keys(uni2);\n        for (var i = 0; i < keys.length; i++) {\n            if (!uni1[keys[i]]) {\n                uni1[keys[i]] = uni2[keys[i]];\n            }\n        }\n        return uni1;\n    };\n    return GPUComputationController;\n}());\n\n\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/utils/GPUComputationController/index.ts?");

/***/ }),

/***/ "./src/utils/GPUComputationController/shaders/passThrough.fs":
/*!*******************************************************************!*\
  !*** ./src/utils/GPUComputationController/shaders/passThrough.fs ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform sampler2D tex;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    gl_FragColor = texture2D(tex,vUv);\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/utils/GPUComputationController/shaders/passThrough.fs?");

/***/ }),

/***/ "./src/utils/GPUComputationController/shaders/passThrough.vs":
/*!*******************************************************************!*\
  !*** ./src/utils/GPUComputationController/shaders/passThrough.vs ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\n\\nvoid main() {\\n    gl_Position = vec4( position, 1.0 );\\n    vUv = uv;\\n}\"\n\n//# sourceURL=webpack://OrayTracingRenderer/./src/utils/GPUComputationController/shaders/passThrough.vs?");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_three__;\n\n//# sourceURL=webpack://OrayTracingRenderer/external_%22THREE%22?");

/***/ })

/******/ });
});