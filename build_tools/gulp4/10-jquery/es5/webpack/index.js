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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29uc3RhbnRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY3VhZHJhZG9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2RvY3VtZW50d3JpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9qcXVlcnlfZXhhbXBsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3N1bWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFFdkIsZ0JBQW9CLElBQVksRUFBVSxFQUF3QjtRQUF4Qiw4QkFBd0I7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bEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSUQ7SUFDSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0saUJBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sdUJBQVUsR0FBakI7UUFDSSxDQUFDLENBQUUsUUFBUSxDQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUtQLENBQUM7SUFDTCxTQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFBLFNBQVM7QUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFFNUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgY2xhc3MgUGVyc29uIHtcclxuICAgIC8vcHJpdmF0ZSBpZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAvL3ByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nLCBwcml2YXRlIGlkOiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tZXRob2RzXHJcbiAgICBwdWJsaWMgbXlOYW1lKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcIlBlcnNvbidzIG5hbWU6IFwiICArIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXlJZCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pZCAhPSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlBlcnNvbidzIGlkOiBcIiArIHRoaXMuaWQ7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJQZXJzb24ncyAgaXMgdW5kZWZpbmVkXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltcG9ydCB7IHN1bWEgfSBmcm9tICcuL3N1bWEnO1xyXG5cclxuY29uc29sZS5sb2coJ2FwcC50cyBzdW1hbmRvIGltcG9ydGFuZG8gc3VtYSAnICsgc3VtYSgxMCwgMjApICsgJyB2YWxvcicpO1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IHBlcGEgPSAndW4gZGlidWpvIGFuaW1hZG8nO1xyXG5cclxuIiwiLy8tLS0tLS0gY3VhZHJhZG9saWIuanMgLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBzcXJ0ID0gTWF0aC5zcXJ0O1xyXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlKHgpIHtcclxuICAgIHJldHVybiB4ICogeDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlhZyh4LCB5KSB7XHJcbiAgICByZXR1cm4gc3FydChzcXVhcmUoeCkgKyBzcXVhcmUoeSkpO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhcInNlIGNhcmdvIGN1YWRyYWRvbGliLnRzXCIpOyIsIlxyXG4vL2Jhci50c1xyXG5jb25zb2xlLmxvZyhcInNlIGNhcmdvIGZ1bmNpb24gZXhwb3J0YWRhIGVzY3JpYmlyX2VuX3BhbnRhbGxhKCkgZGVzZGUgZG9jdW1lbnR3cml0ZS50c1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjcmliaXJfZW5fcGFudGFsbGEodHh0KSB7XHJcbiAgICBkb2N1bWVudC53cml0ZSh0eHQpO1xyXG59IiwiLy9pbmRleC5qc1xyXG5cclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgeyBwZXBhIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5pbXBvcnQgeyBkaWFnLCBzcXVhcmUgfSBmcm9tICcuL2N1YWRyYWRvbGliJztcclxuaW1wb3J0IGVzY3JpYmlyX2VuX3BhbnRhbGxhIGZyb20gJy4vZG9jdW1lbnR3cml0ZSc7XHJcbmltcG9ydCBKcSBmcm9tICcuL2pxdWVyeV9leGFtcGxlcyc7XHJcblxyXG5jb25zdCBwZXJzb24xOiBQZXJzb24gPSBuZXcgUGVyc29uKCdrcnVuYWwnKTtcclxuXHJcbmNvbnNvbGUubG9nKHBlcnNvbjEubXlOYW1lKCkpO1xyXG5cclxuY29uc3QgcGVyc29uMjogUGVyc29uID0gbmV3IFBlcnNvbignU3RhdnJvcycsIDEpO1xyXG5cclxuY29uc29sZS5sb2cocGVyc29uMi5teU5hbWUoKSArICdcXG4nICsgcGVyc29uMi5teUlkKCkpO1xyXG5cclxuZXNjcmliaXJfZW5fcGFudGFsbGEoJ0hvbGEgZXNjcml0byBkZXNkZSBmdW5jaW9uIGRlIHBhcmFtZXRybycpO1xyXG5cclxuY29uc29sZS5sb2coXCJJTkRFWC5UUyBjYXJnbyB5IGltcHJpbWUgZXN0ZSBtZW5zYWplXCIpO1xyXG5jb25zb2xlLmxvZyhwZXBhKTtcclxuXHJcblxyXG5jb25zb2xlLmxvZyhzcXVhcmUoMjUpKTsgLy8gMTIxXHJcbmNvbnNvbGUubG9nKGRpYWcoNCwgMykpOyAvLyA1XHJcblxyXG5cclxuY29uc3QgcXVlcnkgPSBuZXcgSnEoKTtcclxucXVlcnkudGlwbygpO1xyXG5xdWVyeS5ib3RvbmJvcnJhKCk7IiwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm90b24oKXtcclxuICAgICQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCJwXCIpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdib3RvbiBzZSBlamVjdXRvJyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnEge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGFuemFkbyBjbGFzZSBqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpcG8oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNveSBkZWwgdGlwbyBqcXVlcnlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJvdG9uYm9ycmEoKXtcclxuICAgICAgICAkKCBcImJ1dHRvblwiICkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyN0ZXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiLy9zdW1hLnRzXHJcbmNvbnNvbGUubG9nKCdjYXJnYWRvIHN1bWEudHMgcXVlIGV4cG9ydGEgZm4gc3VtYScpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bWEoYSwgYil7XHJcbiAgIHJldHVybiAoYSArIGIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=