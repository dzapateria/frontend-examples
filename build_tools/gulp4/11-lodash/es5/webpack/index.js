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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
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
            return "Person's  is undefined";
    };
    return Person;
}());


console.log('app.ts sumando importando suma ' + Object(_suma__WEBPACK_IMPORTED_MODULE_0__["suma"])(10, 20) + ' valor');


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
/* harmony import */ var _lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lodash */ "./src/ts/lodash.ts");
//index.js






var person1 = new _app__WEBPACK_IMPORTED_MODULE_0__["Person"]('krunal');
console.log(person1.myName());
var person2 = new _app__WEBPACK_IMPORTED_MODULE_0__["Person"]('Stavros', 1);
console.log(person2.myName() + '\n' + person2.myId());
Object(_documentwrite__WEBPACK_IMPORTED_MODULE_3__["default"])('Hola escrito desde funcion de parametro');
console.log("INDEX.TS cargo y imprime este mensaje");
console.log(_constantes__WEBPACK_IMPORTED_MODULE_1__["pepa"]);
var words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];
console.log(Object(_cuadradolib__WEBPACK_IMPORTED_MODULE_2__["square"])(25)); // 121
console.log(Object(_cuadradolib__WEBPACK_IMPORTED_MODULE_2__["diag"])(4, 3)); // 5
var query = new _jquery_examples__WEBPACK_IMPORTED_MODULE_4__["default"]();
query.tipo();
query.botonborra();
var loda = new _lodash__WEBPACK_IMPORTED_MODULE_5__["default"]();
// @ts-ignore
var fel = _.last(words);
console.log(fel);


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

/***/ "./src/ts/lodash.ts":
/*!**************************!*\
  !*** ./src/ts/lodash.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Lo = /** @class */ (function () {
    function Lo() {
        console.log('clase lo de lodash cargada');
    }
    Lo.prototype.ejemplo1 = function (num) {
        console.log(num);
    };
    return Lo;
}());
/* harmony default export */ __webpack_exports__["default"] = (Lo);


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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uc3RhbnRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY3VhZHJhZG9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2RvY3VtZW50d3JpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9qcXVlcnlfZXhhbXBsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2xvZGFzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3VtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUV2QixnQkFB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QUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUU1QyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBQZXJzb24ge1xyXG4gICAgLy9wcml2YXRlIGlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgIC8vcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lOiBzdHJpbmcsIHByaXZhdGUgaWQ6IG51bWJlciB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ldGhvZHNcclxuICAgIHB1YmxpYyBteU5hbWUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFwiUGVyc29uJ3MgbmFtZTogXCIgICsgdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBteUlkKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmlkICE9IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiUGVyc29uJ3MgaWQ6IFwiICsgdGhpcy5pZDtcclxuICAgICAgICBlbHNlIHJldHVybiBcIlBlcnNvbidzICBpcyB1bmRlZmluZWRcIjtcclxuICAgIH1cclxufVxyXG5cclxuaW1wb3J0IHsgc3VtYSB9IGZyb20gJy4vc3VtYSc7XHJcblxyXG5jb25zb2xlLmxvZygnYXBwLnRzIHN1bWFuZG8gaW1wb3J0YW5kbyBzdW1hICcgKyBzdW1hKDEwLCAyMCkgKyAnIHZhbG9yJyk7XHJcbiIsIlxyXG5leHBvcnQgY29uc3QgcGVwYSA9ICd1biBkaWJ1am8gYW5pbWFkbyc7XHJcblxyXG4iLCIvLy0tLS0tLSBjdWFkcmFkb2xpYi5qcyAtLS0tLS1cclxuZXhwb3J0IGNvbnN0IHNxcnQgPSBNYXRoLnNxcnQ7XHJcbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xyXG4gICAgcmV0dXJuIHggKiB4O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaWFnKHgsIHkpIHtcclxuICAgIHJldHVybiBzcXJ0KHNxdWFyZSh4KSArIHNxdWFyZSh5KSk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwic2UgY2FyZ28gY3VhZHJhZG9saWIudHNcIik7IiwiXHJcbi8vYmFyLnRzXHJcbmNvbnNvbGUubG9nKFwic2UgY2FyZ28gZnVuY2lvbiBleHBvcnRhZGEgZXNjcmliaXJfZW5fcGFudGFsbGEoKSBkZXNkZSBkb2N1bWVudHdyaXRlLnRzXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NyaWJpcl9lbl9wYW50YWxsYSh0eHQpIHtcclxuICAgIGRvY3VtZW50LndyaXRlKHR4dCk7XHJcbn0iLCIvL2luZGV4LmpzXHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0IHsgcGVwYSB9IGZyb20gXCIuL2NvbnN0YW50ZXNcIjtcclxuaW1wb3J0IHsgZGlhZywgc3F1YXJlIH0gZnJvbSAnLi9jdWFkcmFkb2xpYic7XHJcbmltcG9ydCBlc2NyaWJpcl9lbl9wYW50YWxsYSBmcm9tICcuL2RvY3VtZW50d3JpdGUnO1xyXG5pbXBvcnQgSnEgZnJvbSAnLi9qcXVlcnlfZXhhbXBsZXMnO1xyXG5pbXBvcnQgTG8gZnJvbSAnLi9sb2Rhc2gnO1xyXG5cclxuY29uc3QgcGVyc29uMTogUGVyc29uID0gbmV3IFBlcnNvbigna3J1bmFsJyk7XHJcblxyXG5jb25zb2xlLmxvZyhwZXJzb24xLm15TmFtZSgpKTtcclxuXHJcbmNvbnN0IHBlcnNvbjI6IFBlcnNvbiA9IG5ldyBQZXJzb24oJ1N0YXZyb3MnLCAxKTtcclxuXHJcbmNvbnNvbGUubG9nKHBlcnNvbjIubXlOYW1lKCkgKyAnXFxuJyArIHBlcnNvbjIubXlJZCgpKTtcclxuXHJcbmVzY3JpYmlyX2VuX3BhbnRhbGxhKCdIb2xhIGVzY3JpdG8gZGVzZGUgZnVuY2lvbiBkZSBwYXJhbWV0cm8nKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiSU5ERVguVFMgY2FyZ28geSBpbXByaW1lIGVzdGUgbWVuc2FqZVwiKTtcclxuY29uc29sZS5sb2cocGVwYSk7XHJcblxyXG5jb25zdCB3b3JkcyA9IFsnc2t5JywgJ3dvb2QnLCAnZm9yZXN0JywgJ2ZhbGNvbicsXHJcbiAgICAncGVhcicsICdvY2VhbicsICd1bml2ZXJzZSddO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKHNxdWFyZSgyNSkpOyAvLyAxMjFcclxuY29uc29sZS5sb2coZGlhZyg0LCAzKSk7IC8vIDVcclxuXHJcblxyXG5jb25zdCBxdWVyeSA9IG5ldyBKcSgpO1xyXG5xdWVyeS50aXBvKCk7XHJcbnF1ZXJ5LmJvdG9uYm9ycmEoKTtcclxuXHJcbmNvbnN0IGxvZGEgPSBuZXcgTG8oKTtcclxuXHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGZlbCA9IF8ubGFzdCh3b3Jkcyk7XHJcbmNvbnNvbGUubG9nKGZlbCk7IiwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm90b24oKXtcclxuICAgICQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCJwXCIpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdib3RvbiBzZSBlamVjdXRvJyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnEge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGFuemFkbyBjbGFzZSBqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpcG8oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNveSBkZWwgdGlwbyBqcXVlcnlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJvdG9uYm9ycmEoKXtcclxuICAgICAgICAkKCBcImJ1dHRvblwiICkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyN0ZXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG97XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGFzZSBsbyBkZSBsb2Rhc2ggY2FyZ2FkYScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlamVtcGxvMShudW06IG51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2cobnVtKTtcclxuICAgIH1cclxufSIsIi8vc3VtYS50c1xyXG5jb25zb2xlLmxvZygnY2FyZ2FkbyBzdW1hLnRzIHF1ZSBleHBvcnRhIGZuIHN1bWEnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1hKGEsIGIpe1xyXG4gICByZXR1cm4gKGEgKyBiKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9