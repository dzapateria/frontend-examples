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
//index.js




var person1 = new _app__WEBPACK_IMPORTED_MODULE_0__["Person"]('krunal');
console.log(person1.myName());
var person2 = new _app__WEBPACK_IMPORTED_MODULE_0__["Person"]('Stavros', 1);
console.log(person2.myName() + '\n' + person2.myId());
Object(_documentwrite__WEBPACK_IMPORTED_MODULE_3__["default"])('Hola escrito desde funcion de parametro');
console.log("INDEX.TS cargo y imprime este mensaje");
console.log(_constantes__WEBPACK_IMPORTED_MODULE_1__["pepa"]);
console.log(Object(_cuadradolib__WEBPACK_IMPORTED_MODULE_2__["square"])(25)); // 121
console.log(Object(_cuadradolib__WEBPACK_IMPORTED_MODULE_2__["diag"])(4, 3)); // 5


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uc3RhbnRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY3VhZHJhZG9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2RvY3VtZW50d3JpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zdW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBRXZCLGdCQUFvQixJQUFZLEVBQVUsRUFBd0I7UUFBeEIsOEJBQXdCO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFzQjtRQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUztJQUNGLHVCQUFNLEdBQWI7UUFFSSxPQUFPLGlCQUFpQixHQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUVNLHFCQUFJLEdBQVg7UUFFSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSTtZQUNuQixPQUFPLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDOztZQUM1QixPQUFPLHdCQUF3QixDQUFDO0lBQ3pDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7QUFFNkI7QUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxrREFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZCekU7QUFBQTtBQUFPLElBQU0sSUFBSSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQThCO0FBQ3ZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDdkIsU0FBUyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUNNLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUnZDO0FBQUE7QUFBQSxRQUFRO0FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO0FBQ3pFLFNBQVMsb0JBQW9CLENBQUMsR0FBRztJQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBVTtBQUVxQjtBQUNLO0FBQ1M7QUFDTTtBQUVuRCxJQUFNLE9BQU8sR0FBVyxJQUFJLDJDQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUU5QixJQUFNLE9BQU8sR0FBVyxJQUFJLDJDQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV0RCw4REFBb0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBRWhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFJLENBQUMsQ0FBQztBQUdsQixPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7OztBQ3RCN0I7QUFBQTtBQUFBLFNBQVM7QUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFFNUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgY2xhc3MgUGVyc29uIHtcclxuICAgIC8vcHJpdmF0ZSBpZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAvL3ByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nLCBwcml2YXRlIGlkOiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tZXRob2RzXHJcbiAgICBwdWJsaWMgbXlOYW1lKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcIlBlcnNvbidzIG5hbWU6IFwiICArIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXlJZCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pZCAhPSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlBlcnNvbidzIGlkOiBcIiArIHRoaXMuaWQ7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJQZXJzb24ncyAgaXMgdW5kZWZpbmVkXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltcG9ydCB7IHN1bWEgfSBmcm9tICcuL3N1bWEnO1xyXG5cclxuY29uc29sZS5sb2coJ2FwcC50cyBzdW1hbmRvIGltcG9ydGFuZG8gc3VtYSAnICsgc3VtYSgxMCwgMjApICsgJyB2YWxvcicpOyIsIlxyXG5leHBvcnQgY29uc3QgcGVwYSA9ICd1biBkaWJ1am8gYW5pbWFkbyc7XHJcblxyXG4iLCIvLy0tLS0tLSBjdWFkcmFkb2xpYi5qcyAtLS0tLS1cclxuZXhwb3J0IGNvbnN0IHNxcnQgPSBNYXRoLnNxcnQ7XHJcbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xyXG4gICAgcmV0dXJuIHggKiB4O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaWFnKHgsIHkpIHtcclxuICAgIHJldHVybiBzcXJ0KHNxdWFyZSh4KSArIHNxdWFyZSh5KSk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwic2UgY2FyZ28gY3VhZHJhZG9saWIudHNcIik7IiwiXHJcbi8vYmFyLnRzXHJcbmNvbnNvbGUubG9nKFwic2UgY2FyZ28gZnVuY2lvbiBleHBvcnRhZGEgZXNjcmliaXJfZW5fcGFudGFsbGEoKSBkZXNkZSBkb2N1bWVudHdyaXRlLnRzXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NyaWJpcl9lbl9wYW50YWxsYSh0eHQpIHtcclxuICAgIGRvY3VtZW50LndyaXRlKHR4dCk7XHJcbn0iLCIvL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCB7IHBlcGEgfSBmcm9tIFwiLi9jb25zdGFudGVzXCI7XHJcbmltcG9ydCB7IGRpYWcsIHNxdWFyZSB9IGZyb20gJy4vY3VhZHJhZG9saWInO1xyXG5pbXBvcnQgZXNjcmliaXJfZW5fcGFudGFsbGEgZnJvbSAnLi9kb2N1bWVudHdyaXRlJztcclxuXHJcbmNvbnN0IHBlcnNvbjE6IFBlcnNvbiA9IG5ldyBQZXJzb24oJ2tydW5hbCcpO1xyXG5cclxuY29uc29sZS5sb2cocGVyc29uMS5teU5hbWUoKSk7XHJcblxyXG5jb25zdCBwZXJzb24yOiBQZXJzb24gPSBuZXcgUGVyc29uKCdTdGF2cm9zJywgMSk7XHJcblxyXG5jb25zb2xlLmxvZyhwZXJzb24yLm15TmFtZSgpICsgJ1xcbicgKyBwZXJzb24yLm15SWQoKSk7XHJcblxyXG5lc2NyaWJpcl9lbl9wYW50YWxsYSgnSG9sYSBlc2NyaXRvIGRlc2RlIGZ1bmNpb24gZGUgcGFyYW1ldHJvJyk7XHJcblxyXG5jb25zb2xlLmxvZyhcIklOREVYLlRTIGNhcmdvIHkgaW1wcmltZSBlc3RlIG1lbnNhamVcIik7XHJcbmNvbnNvbGUubG9nKHBlcGEpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKHNxdWFyZSgyNSkpOyAvLyAxMjFcclxuY29uc29sZS5sb2coZGlhZyg0LCAzKSk7IC8vIDUiLCIvL3N1bWEudHNcclxuY29uc29sZS5sb2coJ2NhcmdhZG8gc3VtYS50cyBxdWUgZXhwb3J0YSBmbiBzdW1hJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VtYShhLCBiKXtcclxuICAgcmV0dXJuIChhICsgYik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==