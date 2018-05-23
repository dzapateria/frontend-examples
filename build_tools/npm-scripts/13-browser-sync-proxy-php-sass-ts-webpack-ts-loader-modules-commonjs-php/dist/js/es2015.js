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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/es2015.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/es2015.ts":
/*!**************************!*\
  !*** ./src/ts/es2015.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
$('body').append(" <h1>es2015.ts</h1>");
var Ordenador_1 = __webpack_require__(/*! ./es2015/Ordenador */ "./src/ts/es2015/Ordenador.ts");
var lenovo = new Ordenador_1.Ordenador("lenovo y700", 830, 17);
$('.ordenador').append("\n    Modelo: " + lenovo.modelo + " \n    Precio: " + lenovo.pvp + "\n    Pulgadas: " + lenovo.pantalla + "\n    ");


/***/ }),

/***/ "./src/ts/es2015/Ordenador.ts":
/*!************************************!*\
  !*** ./src/ts/es2015/Ordenador.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Producto_1 = __webpack_require__(/*! ./Producto */ "./src/ts/es2015/Producto.ts");
var Ordenador = /** @class */ (function (_super) {
    __extends(Ordenador, _super);
    function Ordenador(modelo, pvp, pantalla) {
        var _this = _super.call(this, modelo, pvp) || this;
        _this.pantalla = pantalla;
        _this.pantalla = pantalla;
        return _this;
    }
    return Ordenador;
}(Producto_1.Producto));
exports.Ordenador = Ordenador;


/***/ }),

/***/ "./src/ts/es2015/Producto.ts":
/*!***********************************!*\
  !*** ./src/ts/es2015/Producto.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Producto = /** @class */ (function () {
    function Producto(modelo, pvp) {
        this.modelo = modelo;
        this.pvp = pvp;
        modelo;
        pvp;
    }
    return Producto;
}());
exports.Producto = Producto;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VzMjAxNS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXMyMDE1L09yZGVuYWRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZXMyMDE1L1Byb2R1Y3RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBR3hDLGdHQUErQztBQUcvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUduRCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUNsQixtQkFDVSxNQUFNLENBQUMsTUFBTSx1QkFDYixNQUFNLENBQUMsR0FBRyx3QkFDUixNQUFNLENBQUMsUUFBUSxXQUMxQixDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsc0ZBQXNDO0FBRXRDO0lBQStCLDZCQUFRO0lBRW5DLG1CQUFZLE1BQWMsRUFBRSxHQUFXLEVBQVMsUUFBZ0I7UUFBaEUsWUFDSSxrQkFBTSxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBRXJCO1FBSCtDLGNBQVEsR0FBUixRQUFRLENBQVE7UUFFNUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0lBQzdCLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQ0FQOEIsbUJBQVEsR0FPdEM7QUFQWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7O0FDRnRCO0lBRUksa0JBQW1CLE1BQWMsRUFBUyxHQUFXO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ2pELE1BQU0sQ0FBQztRQUNQLEdBQUcsQ0FBQztJQUNSLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQU5ZLDRCQUFRIiwiZmlsZSI6ImVzMjAxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9lczIwMTUudHNcIik7XG4iLCIkKCdib2R5JykuYXBwZW5kKGAgPGgxPmVzMjAxNS50czwvaDE+YCk7XHJcblxyXG5cclxuaW1wb3J0IHsgT3JkZW5hZG9yIH0gZnJvbSBcIi4vZXMyMDE1L09yZGVuYWRvclwiO1xyXG5cclxuXHJcbmxldCBsZW5vdm8gPSBuZXcgT3JkZW5hZG9yKFwibGVub3ZvIHk3MDBcIiwgODMwLCAxNyk7XHJcblxyXG5cclxuJCgnLm9yZGVuYWRvcicpLmFwcGVuZChcclxuICAgIGBcclxuICAgIE1vZGVsbzogJHtsZW5vdm8ubW9kZWxvfSBcclxuICAgIFByZWNpbzogJHtsZW5vdm8ucHZwfVxyXG4gICAgUHVsZ2FkYXM6ICR7bGVub3ZvLnBhbnRhbGxhfVxyXG4gICAgYFxyXG4pIiwiaW1wb3J0IHsgUHJvZHVjdG8gfSBmcm9tICcuL1Byb2R1Y3RvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlbmFkb3IgZXh0ZW5kcyBQcm9kdWN0byB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9kZWxvOiBzdHJpbmcsIHB2cDogbnVtYmVyLCBwdWJsaWMgcGFudGFsbGE6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsbywgcHZwKTtcclxuICAgICAgICB0aGlzLnBhbnRhbGxhID0gcGFudGFsbGE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgUHJvZHVjdG8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlbG86IHN0cmluZywgcHVibGljIHB2cDogbnVtYmVyKSB7XHJcbiAgICAgICAgbW9kZWxvO1xyXG4gICAgICAgIHB2cDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=