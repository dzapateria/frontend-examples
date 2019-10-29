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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uc3RhbnRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY3VhZHJhZG9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2RvY3VtZW50d3JpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9qcXVlcnlfZXhhbXBsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2xvZGFzaF9leGFtcGxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbmVlZF9sb2Rhc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3N1bWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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Q0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxvQkFBTyxHQUFkLFVBQWUsRUFBRTtRQUNiLGFBQWE7UUFDYixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBbUM7QUFFbkMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRO0lBQzVDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFaEMsSUFBTSxJQUFJLEdBQUcsSUFBSSx3REFBRSxFQUFFLENBQUM7QUFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNaakM7QUFBQTtBQUFBLFNBQVM7QUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFFNUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDIiwiZmlsZSI6IndlYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY2xhc3MgUGVyc29uIHtcclxuICAgIC8vcHJpdmF0ZSBpZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAvL3ByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nLCBwcml2YXRlIGlkOiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tZXRob2RzXHJcbiAgICBwdWJsaWMgbXlOYW1lKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcIlBlcnNvbidzIG5hbWU6IFwiICArIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXlJZCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pZCAhPSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlBlcnNvbidzIGlkOiBcIiArIHRoaXMuaWQ7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJQZXJzb24ncyAgaXMgdW5kZWZpbmVkIFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbXBvcnQgeyBzdW1hIH0gZnJvbSAnLi9zdW1hJztcclxuXHJcbmNvbnNvbGUubG9nKCdhcHAudHMgc3VtYW5kbyBpbXBvcnRhbmRvIHN1bWEgJyArIHN1bWEoMTAsIDIwKSArICcgdmFsb3InKTtcclxuIiwiLy9saWJyZS50c1xyXG5cclxuaW1wb3J0IHsgc3VtYSB9IGZyb20gJy4vc3VtYSc7XHJcblxyXG5jb25zb2xlLmxvZyhcImNvbXBvbmVudGUudHMgY2FyZ2FkbyBpbXBvcnRhbmRvIHN1bWEgZGUgc3VtYVwiKTtcclxuXHJcbmNvbnNvbGUubG9nKHN1bWEoMTAwLCA1MDApKTsiLCJcclxuZXhwb3J0IGNvbnN0IHBlcGEgPSAndW4gZGlidWpvIGFuaW1hZG8nO1xyXG5cclxuIiwiLy8tLS0tLS0gY3VhZHJhZG9saWIuanMgLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBzcXJ0ID0gTWF0aC5zcXJ0O1xyXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlKHgpIHtcclxuICAgIHJldHVybiB4ICogeDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlhZyh4LCB5KSB7XHJcbiAgICByZXR1cm4gc3FydChzcXVhcmUoeCkgKyBzcXVhcmUoeSkpO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhcInNlIGNhcmdvIGN1YWRyYWRvbGliLnRzXCIpOyIsIlxyXG4vL2Jhci50c1xyXG5jb25zb2xlLmxvZyhcInNlIGNhcmdvIGZ1bmNpb24gZXhwb3J0YWRhIGVzY3JpYmlyX2VuX3BhbnRhbGxhKCkgZGVzZGUgZG9jdW1lbnR3cml0ZS50c1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjcmliaXJfZW5fcGFudGFsbGEodHh0KSB7XHJcbiAgICBkb2N1bWVudC53cml0ZSh0eHQpO1xyXG59IiwiLy9pbmRleC5qc1xyXG5cclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgeyBwZXBhIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5pbXBvcnQgeyBkaWFnLCBzcXVhcmUgfSBmcm9tICcuL2N1YWRyYWRvbGliJztcclxuaW1wb3J0IGVzY3JpYmlyX2VuX3BhbnRhbGxhIGZyb20gJy4vZG9jdW1lbnR3cml0ZSc7XHJcbmltcG9ydCBKcSBmcm9tICcuL2pxdWVyeV9leGFtcGxlcyc7XHJcbmltcG9ydCBMbyBmcm9tICcuL2xvZGFzaF9leGFtcGxlcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwZXJzb24xOiBQZXJzb24gPSBuZXcgUGVyc29uKCdrcnVuYWwnKTtcclxuXHJcbmNvbnNvbGUubG9nKHBlcnNvbjEubXlOYW1lKCkpO1xyXG5cclxuY29uc3QgcGVyc29uMjogUGVyc29uID0gbmV3IFBlcnNvbignU3RhdnJvcycsIDEpO1xyXG5cclxuY29uc29sZS5sb2cocGVyc29uMi5teU5hbWUoKSArICdcXG4nICsgcGVyc29uMi5teUlkKCkpO1xyXG5cclxuZXNjcmliaXJfZW5fcGFudGFsbGEoJ0hvbGEgZXNjcml0byBkZXNkZSBmdW5jaW9uIGRlIHBhcmFtZXRybycpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiSU5ERVguVFMgY2FyZ28geSBpbXByaW1lIGVzdGUgbWVuc2FqZVwiKTtcclxuY29uc29sZS5sb2cocGVwYSk7XHJcbmNvbnN0IGxvZGFzaDEgPSBuZXcgTG8oKTtcclxuXHJcbmNvbnN0IGxpc3QxID0gbG9kYXNoMS5wcmltZXJvKFsndW5vJywgJ2RvcycsICd0cmVzJ10pO1xyXG5cclxuY29uc29sZS5sb2coYExhIGxpc3RhIGRlIGxvZGFzaCBpbXByaW1lICR7bGlzdDF9YCk7XHJcbmNvbnNvbGUubG9nKHNxdWFyZSgyNSkpOyAvLyAxMjFcclxuY29uc29sZS5sb2coZGlhZyg0LCAzKSk7IC8vIDVcclxuXHJcblxyXG5jb25zdCBxdWVyeSA9IG5ldyBKcSgpO1xyXG5xdWVyeS50aXBvKCk7XHJcbnF1ZXJ5LmJvdG9uYm9ycmEoKTtcclxuXHJcbiIsIlxyXG4vLyBBTCBFU1RBUiBFTiBleHRlcm5hbHMgTk8gTkVDRVNJVEEgSU1QT1JUU1xyXG5leHBvcnQgZnVuY3Rpb24gYm90b24oKXtcclxuICAgICQoKCkgPT4ge1xyXG4gICAgICAgICQoXCJidXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwicFwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnYm90b24gc2UgZWplY3V0bycpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpxIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xhbnphZG8gY2xhc2UgaicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aXBvKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb3kgZGVsIHRpcG8ganF1ZXJ5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib3RvbmJvcnJhKCl7XHJcbiAgICAgICAgJCggXCJidXR0b25cIiApLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgJCgnI3Rlc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG97XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGFzZSBsbyBkZSBsb2Rhc2ggY2FyZ2FkYSBjb3JyZWN0bycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmltZXJvKGFyKXtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIF8uZmlyc3QoYXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IExvIGZyb20gJy4vbG9kYXNoX2V4YW1wbGVzJztcclxuXHJcbmNvbnN0IHdvcmRzID0gWydza3knLCAnd29vZCcsICdmb3Jlc3QnLCAnZmFsY29uJyxcclxuICAgICdwZWFyJywgJ29jZWFuJywgJ3BsYW5ldGEnXTtcclxuXHJcbmNvbnN0IGxvZGEgPSBuZXcgTG8oKTtcclxuXHJcbmxvZGEucHJpbWVybyh3b3Jkcyk7XHJcblxyXG5jb25zb2xlLmxvZygnbmVlZF9sb2Rhc2ggc2UgZWplY3V0byBvayAyJyk7XHJcblxyXG5jb25zb2xlLmxvZyhsb2RhLnByaW1lcm8od29yZHMpKTtcclxuXHJcbiIsIi8vc3VtYS50c1xyXG5jb25zb2xlLmxvZygnY2FyZ2FkbyBzdW1hLnRzIHF1ZSBleHBvcnRhIGZuIHN1bWEnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1hKGEsIGIpe1xyXG4gICByZXR1cm4gKGEgKyBiKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9