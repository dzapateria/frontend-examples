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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var _suma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suma */ "./src/ts/suma.ts");
var Person = /** @class */ (function () {
    //private id: number | null = null;
    //private name: string;
    function Person(name, id) {
        if (id === void 0) { id = null; }
        this.name = name;
        this.id = id;
        this.name = name;
    }
    //methods
    Person.prototype.myName = function () {
        return "Person's name: " + this.name;
    };
    Person.prototype.myId = function () {
        if (this.id != null)
            return "Person's id: " + this.id;
        else
            return "Person's  is undefined ";
    };
    return Person;
}());


console.log('app.ts sumando importando suma ' + Object(_suma__WEBPACK_IMPORTED_MODULE_0__["suma"])(10, 20) + ' valor');


/***/ }),

/***/ "./src/ts/componente.ts":
/*!******************************!*\
  !*** ./src/ts/componente.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _suma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suma */ "./src/ts/suma.ts");
//libre.ts

console.log("componente.ts cargado importando suma de suma");
console.log(Object(_suma__WEBPACK_IMPORTED_MODULE_0__["suma"])(100, 500));


/***/ }),

/***/ "./src/ts/constantes.ts":
/*!******************************!*\
  !*** ./src/ts/constantes.ts ***!
  \******************************/
/*! exports provided: pepa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pepa", function() { return pepa; });
var pepa = 'un dibujo animado';


/***/ }),

/***/ "./src/ts/cuadradolib.ts":
/*!*******************************!*\
  !*** ./src/ts/cuadradolib.ts ***!
  \*******************************/
/*! exports provided: sqrt, square, diag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diag", function() { return diag; });
//------ cuadradolib.js ------
var sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
console.log("se cargo cuadradolib.ts");


/***/ }),

/***/ "./src/ts/documentwrite.ts":
/*!*********************************!*\
  !*** ./src/ts/documentwrite.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return escribir_en_pantalla; });
//bar.ts
console.log("se cargo funcion exportada escribir_en_pantalla() desde documentwrite.ts");
function escribir_en_pantalla(txt) {
    document.write(txt);
}


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/ts/app.ts");
/* harmony import */ var _constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constantes */ "./src/ts/constantes.ts");
/* harmony import */ var _cuadradolib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuadradolib */ "./src/ts/cuadradolib.ts");
/* harmony import */ var _documentwrite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentwrite */ "./src/ts/documentwrite.ts");
/* harmony import */ var _jquery_examples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jquery_examples */ "./src/ts/jquery_examples.ts");
/* harmony import */ var _lodash_examples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lodash_examples */ "./src/ts/lodash_examples.ts");
//index.js






var person1 = new _app__WEBPACK_IMPORTED_MODULE_0__["Person"]('krunal');
console.log(person1.myName());
var person2 = new _app__WEBPACK_IMPORTED_MODULE_0__["Person"]('Stavros', 1);
console.log(person2.myName() + '\n' + person2.myId());
Object(_documentwrite__WEBPACK_IMPORTED_MODULE_3__["default"])('Hola escrito desde funcion de parametro');
console.log("INDEX.TS cargo y imprime este mensaje");
console.log(_constantes__WEBPACK_IMPORTED_MODULE_1__["pepa"]);
var lodash1 = new _lodash_examples__WEBPACK_IMPORTED_MODULE_5__["default"]();
var list1 = lodash1.primero(['uno', 'dos', 'tres']);
console.log("La lista de lodash imprime " + list1);
console.log(Object(_cuadradolib__WEBPACK_IMPORTED_MODULE_2__["square"])(25)); // 121
console.log(Object(_cuadradolib__WEBPACK_IMPORTED_MODULE_2__["diag"])(4, 3)); // 5
var query = new _jquery_examples__WEBPACK_IMPORTED_MODULE_4__["default"]();
query.tipo();
query.botonborra();


/***/ }),

/***/ "./src/ts/jquery_examples.ts":
/*!***********************************!*\
  !*** ./src/ts/jquery_examples.ts ***!
  \***********************************/
/*! exports provided: boton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boton", function() { return boton; });
// AL ESTAR EN externals NO NECESITA IMPORTS
function boton() {
    $(function () {
        $("button").click(function () {
            $("p").hide();
        });
    });
    console.log('boton se ejecuto');
}
var Jq = /** @class */ (function () {
    function Jq() {
        console.log('lanzado clase j');
    }
    Jq.prototype.tipo = function () {
        console.log("soy del tipo jquery");
    };
    Jq.prototype.botonborra = function () {
        $("button").click(function () {
            $('#test').remove();
        });
    };
    return Jq;
}());
/* harmony default export */ __webpack_exports__["default"] = (Jq);


/***/ }),

/***/ "./src/ts/lodash_examples.ts":
/*!***********************************!*\
  !*** ./src/ts/lodash_examples.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Lo = /** @class */ (function () {
    function Lo() {
        console.log('clase lo de lodash cargada correcto');
    }
    Lo.prototype.primero = function (ar) {
        // @ts-ignore
        return _.first(ar);
    };
    return Lo;
}());
/* harmony default export */ __webpack_exports__["default"] = (Lo);


/***/ }),

/***/ "./src/ts/need_lodash.ts":
/*!*******************************!*\
  !*** ./src/ts/need_lodash.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lodash_examples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lodash_examples */ "./src/ts/lodash_examples.ts");

var words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'planeta'];
var loda = new _lodash_examples__WEBPACK_IMPORTED_MODULE_0__["default"]();
loda.primero(words);
console.log('need_lodash se ejecuto ok 2');
console.log(loda.primero(words));


/***/ }),

/***/ "./src/ts/suma.ts":
/*!************************!*\
  !*** ./src/ts/suma.ts ***!
  \************************/
/*! exports provided: suma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suma", function() { return suma; });
//suma.ts
console.log('cargado suma.ts que exporta fn suma');
function suma(a, b) {
    return (a + b);
}


/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi ./src/ts/index.ts ./src/ts/componente.ts ./src/ts/need_lodash.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/ts/index.ts */"./src/ts/index.ts");
__webpack_require__(/*! ./src/ts/componente.ts */"./src/ts/componente.ts");
module.exports = __webpack_require__(/*! ./src/ts/need_lodash.ts */"./src/ts/need_lodash.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uc3RhbnRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY3VhZHJhZG9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2RvY3VtZW50d3JpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9qcXVlcnlfZXhhbXBsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2xvZGFzaF9leGFtcGxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbmVlZF9sb2Rhc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3N1bWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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Q0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxvQkFBTyxHQUFkLFVBQWUsRUFBRTtRQUNiLGFBQWE7UUFDYixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBbUM7QUFFbkMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRO0lBQzVDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFaEMsSUFBTSxJQUFJLEdBQUcsSUFBSSx3REFBRSxFQUFFLENBQUM7QUFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNaakM7QUFBQTtBQUFBLFNBQVM7QUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFFNUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDIiwiZmlsZSI6IndlYnBhY2stYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIFBlcnNvbiB7XHJcbiAgICAvL3ByaXZhdGUgaWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgLy9wcml2YXRlIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZywgcHJpdmF0ZSBpZDogbnVtYmVyIHwgbnVsbCA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbWV0aG9kc1xyXG4gICAgcHVibGljIG15TmFtZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gXCJQZXJzb24ncyBuYW1lOiBcIiAgKyB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG15SWQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgIT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJQZXJzb24ncyBpZDogXCIgKyB0aGlzLmlkO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIFwiUGVyc29uJ3MgIGlzIHVuZGVmaW5lZCBcIjtcclxuICAgIH1cclxufVxyXG5cclxuaW1wb3J0IHsgc3VtYSB9IGZyb20gJy4vc3VtYSc7XHJcblxyXG5jb25zb2xlLmxvZygnYXBwLnRzIHN1bWFuZG8gaW1wb3J0YW5kbyBzdW1hICcgKyBzdW1hKDEwLCAyMCkgKyAnIHZhbG9yJyk7XHJcbiIsIi8vbGlicmUudHNcclxuXHJcbmltcG9ydCB7IHN1bWEgfSBmcm9tICcuL3N1bWEnO1xyXG5cclxuY29uc29sZS5sb2coXCJjb21wb25lbnRlLnRzIGNhcmdhZG8gaW1wb3J0YW5kbyBzdW1hIGRlIHN1bWFcIik7XHJcblxyXG5jb25zb2xlLmxvZyhzdW1hKDEwMCwgNTAwKSk7IiwiXHJcbmV4cG9ydCBjb25zdCBwZXBhID0gJ3VuIGRpYnVqbyBhbmltYWRvJztcclxuXHJcbiIsIi8vLS0tLS0tIGN1YWRyYWRvbGliLmpzIC0tLS0tLVxyXG5leHBvcnQgY29uc3Qgc3FydCA9IE1hdGguc3FydDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XHJcbiAgICByZXR1cm4geCAqIHg7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWcoeCwgeSkge1xyXG4gICAgcmV0dXJuIHNxcnQoc3F1YXJlKHgpICsgc3F1YXJlKHkpKTtcclxufVxyXG5cclxuY29uc29sZS5sb2coXCJzZSBjYXJnbyBjdWFkcmFkb2xpYi50c1wiKTsiLCJcclxuLy9iYXIudHNcclxuY29uc29sZS5sb2coXCJzZSBjYXJnbyBmdW5jaW9uIGV4cG9ydGFkYSBlc2NyaWJpcl9lbl9wYW50YWxsYSgpIGRlc2RlIGRvY3VtZW50d3JpdGUudHNcIik7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY3JpYmlyX2VuX3BhbnRhbGxhKHR4dCkge1xyXG4gICAgZG9jdW1lbnQud3JpdGUodHh0KTtcclxufSIsIi8vaW5kZXguanNcclxuXHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0IHsgcGVwYSB9IGZyb20gXCIuL2NvbnN0YW50ZXNcIjtcclxuaW1wb3J0IHsgZGlhZywgc3F1YXJlIH0gZnJvbSAnLi9jdWFkcmFkb2xpYic7XHJcbmltcG9ydCBlc2NyaWJpcl9lbl9wYW50YWxsYSBmcm9tICcuL2RvY3VtZW50d3JpdGUnO1xyXG5pbXBvcnQgSnEgZnJvbSAnLi9qcXVlcnlfZXhhbXBsZXMnO1xyXG5pbXBvcnQgTG8gZnJvbSAnLi9sb2Rhc2hfZXhhbXBsZXMnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcGVyc29uMTogUGVyc29uID0gbmV3IFBlcnNvbigna3J1bmFsJyk7XHJcblxyXG5jb25zb2xlLmxvZyhwZXJzb24xLm15TmFtZSgpKTtcclxuXHJcbmNvbnN0IHBlcnNvbjI6IFBlcnNvbiA9IG5ldyBQZXJzb24oJ1N0YXZyb3MnLCAxKTtcclxuXHJcbmNvbnNvbGUubG9nKHBlcnNvbjIubXlOYW1lKCkgKyAnXFxuJyArIHBlcnNvbjIubXlJZCgpKTtcclxuXHJcbmVzY3JpYmlyX2VuX3BhbnRhbGxhKCdIb2xhIGVzY3JpdG8gZGVzZGUgZnVuY2lvbiBkZSBwYXJhbWV0cm8nKTtcclxuXHJcblxyXG5jb25zb2xlLmxvZyhcIklOREVYLlRTIGNhcmdvIHkgaW1wcmltZSBlc3RlIG1lbnNhamVcIik7XHJcbmNvbnNvbGUubG9nKHBlcGEpO1xyXG5jb25zdCBsb2Rhc2gxID0gbmV3IExvKCk7XHJcblxyXG5jb25zdCBsaXN0MSA9IGxvZGFzaDEucHJpbWVybyhbJ3VubycsICdkb3MnLCAndHJlcyddKTtcclxuXHJcbmNvbnNvbGUubG9nKGBMYSBsaXN0YSBkZSBsb2Rhc2ggaW1wcmltZSAke2xpc3QxfWApO1xyXG5jb25zb2xlLmxvZyhzcXVhcmUoMjUpKTsgLy8gMTIxXHJcbmNvbnNvbGUubG9nKGRpYWcoNCwgMykpOyAvLyA1XHJcblxyXG5cclxuY29uc3QgcXVlcnkgPSBuZXcgSnEoKTtcclxucXVlcnkudGlwbygpO1xyXG5xdWVyeS5ib3RvbmJvcnJhKCk7XHJcblxyXG4iLCJcclxuLy8gQUwgRVNUQVIgRU4gZXh0ZXJuYWxzIE5PIE5FQ0VTSVRBIElNUE9SVFNcclxuZXhwb3J0IGZ1bmN0aW9uIGJvdG9uKCl7XHJcbiAgICAkKCgpID0+IHtcclxuICAgICAgICAkKFwiYnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgJChcInBcIikuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2JvdG9uIHNlIGVqZWN1dG8nKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKcSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsYW56YWRvIGNsYXNlIGonKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGlwbygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic295IGRlbCB0aXBvIGpxdWVyeVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYm90b25ib3JyYSgpe1xyXG4gICAgICAgICQoIFwiYnV0dG9uXCIgKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJyN0ZXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExve1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xhc2UgbG8gZGUgbG9kYXNoIGNhcmdhZGEgY29ycmVjdG8nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbWVybyhhcil7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBfLmZpcnN0KGFyKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCBMbyBmcm9tICcuL2xvZGFzaF9leGFtcGxlcyc7XHJcblxyXG5jb25zdCB3b3JkcyA9IFsnc2t5JywgJ3dvb2QnLCAnZm9yZXN0JywgJ2ZhbGNvbicsXHJcbiAgICAncGVhcicsICdvY2VhbicsICdwbGFuZXRhJ107XHJcblxyXG5jb25zdCBsb2RhID0gbmV3IExvKCk7XHJcblxyXG5sb2RhLnByaW1lcm8od29yZHMpO1xyXG5cclxuY29uc29sZS5sb2coJ25lZWRfbG9kYXNoIHNlIGVqZWN1dG8gb2sgMicpO1xyXG5cclxuY29uc29sZS5sb2cobG9kYS5wcmltZXJvKHdvcmRzKSk7XHJcblxyXG4iLCIvL3N1bWEudHNcclxuY29uc29sZS5sb2coJ2NhcmdhZG8gc3VtYS50cyBxdWUgZXhwb3J0YSBmbiBzdW1hJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VtYShhLCBiKXtcclxuICAgcmV0dXJuIChhICsgYik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==