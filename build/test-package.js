(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PKG = {}));
}(this, (function (exports) { 'use strict';

	var Test = /** @class */ (function () {
	    function Test() {
	    }
	    Test.prototype.getHello = function () {
	        console.log("Hello");
	        return 'Hello';
	    };
	    return Test;
	}());

	exports.Test = Test;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
