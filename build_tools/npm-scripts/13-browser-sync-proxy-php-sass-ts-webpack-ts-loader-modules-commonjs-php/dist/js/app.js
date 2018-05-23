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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/Estudiante.ts":
/*!******************************!*\
  !*** ./src/ts/Estudiante.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Estudiante.prototype.suspender = function () {
        return "suspendido: " + this.nombre + ", " + this.apellido;
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;


/***/ }),

/***/ "./src/ts/commonjs-alumnoFn.ts":
/*!*************************************!*\
  !*** ./src/ts/commonjs-alumnoFn.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function alumnoSaluda(name) {
    $('body').append("\n        <hr>\n        <h3>COMMONJS: Funci\u00F3n exportada commonjs-alumnoFn: " + name + " </h3>\n    ");
}
module.exports = alumnoSaluda;


/***/ }),

/***/ "./src/ts/commonjsProfesor.ts":
/*!************************************!*\
  !*** ./src/ts/commonjsProfesor.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Profesor = /** @class */ (function () {
    function Profesor(nombre, edad, estado) {
        this.nombre = nombre;
        this.edad = edad;
        this.estado = estado;
    }
    Profesor.prototype.despedir = function () {
        this.estado = false;
    };
    Profesor.prototype.saludar = function () {
        return "Hola soy el profesor " + this.nombre + " \n        tengo " + this.edad + " y mi estado es " + this.estado;
    };
    return Profesor;
}());
module.exports = Profesor;


/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Libs Base: jquery, axios, lodash, vue, bootstrap
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
|--------------------------------------------------------------------------
|                    COMMONJS NODEJS ( Webpack)
|   EXTERNAL LIBS IN node_modules
|--------------------------------------------------------------------------
|
| Install the libs with
| npm i --save jquery axios lodash vue bootstrap
|
*/
// import $ = require("jquery");
// window.$ = window.jQuery = require("jquery");
/*
|--------------------------------------------------------------------------
|                        COMMONJS NODEJS ( Webpack)
| IMPORTANDO SUS PROPIOS MODULOS CON FUNCIONES
|--------------------------------------------------------------------------
|
*/
//Function 
var alumnoSaluda = __webpack_require__(/*! ./commonjs-alumnoFn */ "./src/ts/commonjs-alumnoFn.ts");
// Output in body
// Mostrando la salida para test 
alumnoSaluda("Paco");
// $('body').append(`<hr><h2>Opciones: ${options1.titulo}</h2>`);
// -------------------------------------------
// Clase Profesor
var Profesor = __webpack_require__(/*! ./commonjsProfesor */ "./src/ts/commonjsProfesor.ts");
var javier = new Profesor('Javier Jimenez Martín', 22, true);
$('body').append("<hr><h2>Profesor dice: " + javier.saludar() + " !</h2>");
/*
|--------------------------------------------------------------------------
|   ES2015 - BABEL import
|--------------------------------------------------------------------------
| load class in Estudiante.ts
|
*/
var Estudiante_1 = __webpack_require__(/*! ./Estudiante */ "./src/ts/Estudiante.ts");
var garcia = new Estudiante_1.Estudiante("Paco", "Gomez", 22);
$('row').append("<hr><h2> " + garcia.suspender() + "  </h2>");
$("button").click(function () {
    console.log("registrado");
});
var profe = __importStar(__webpack_require__(/*! ./profesorFn */ "./src/ts/profesorFn.ts"));
$('body').append(" " + profe.profesorSaluda('<h3>Soy el Nuevo profe, llamarme al</h3>') + ",Tel: " + profe.datos.telefono);
/* OUTPUTS SALIDAS */


/***/ }),

/***/ "./src/ts/profesorFn.ts":
/*!******************************!*\
  !*** ./src/ts/profesorFn.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function profesorSaluda(name) {
    return 'profesorFn.ts ES6 Modules: ' + name;
}
exports.profesorSaluda = profesorSaluda;
exports.datos = {
    "telefono": "600 100 200"
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0VzdHVkaWFudGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbW1vbmpzLWFsdW1ub0ZuLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21tb25qc1Byb2Zlc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9wcm9mZXNvckZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7SUFJSSxvQkFBWSxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxJQUFZO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUNwQixDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLE9BQU8saUJBQWUsSUFBSSxDQUFDLE1BQU0sVUFBSyxJQUFJLENBQUMsUUFBVSxDQUFDO0lBQzFELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFaWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7QUNIdkIsc0JBQXNCLElBQVk7SUFFOUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxRkFFd0MsSUFBSSxpQkFDNUQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELGlCQUFTLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNOdEI7SUFLSSxrQkFBWSxNQUFjLEVBQUUsSUFBWSxFQUFFLE1BQWU7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLE9BQU8sMEJBQXdCLElBQUksQ0FBQyxNQUFNLHlCQUNsQyxJQUFJLENBQUMsSUFBSSx3QkFBbUIsSUFBSSxDQUFDLE1BQVEsQ0FBQztJQUN0RCxDQUFDO0lBRUwsZUFBQztBQUFELENBQUM7QUFFRCxpQkFBUyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcEJsQixtREFBbUQ7Ozs7Ozs7OztBQUVuRDs7Ozs7Ozs7O0VBU0U7QUFFRixnQ0FBZ0M7QUFDaEMsZ0RBQWdEO0FBRWhEOzs7Ozs7RUFNRTtBQUNGLFdBQVc7QUFDWCxtR0FBcUQ7QUFDckQsaUJBQWlCO0FBRWpCLGlDQUFpQztBQUVqQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFJckIsaUVBQWlFO0FBRWpFLDhDQUE4QztBQUU5QyxpQkFBaUI7QUFDakIsNkZBQWdEO0FBQ2hELElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLDRCQUEwQixNQUFNLENBQUMsT0FBTyxFQUFFLFlBQVMsQ0FBQyxDQUFDO0FBR3RFOzs7Ozs7RUFNRTtBQUVGLHFGQUEwQztBQUUxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQVksTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFTLENBQUMsQ0FBQztBQUV6RCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCw0RkFBc0M7QUFFdEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsMENBQTBDLENBQUMsY0FBUyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVUsQ0FBQyxDQUFDO0FBR3RILHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkVyQix3QkFBK0IsSUFBWTtJQUN2QyxPQUFPLDZCQUE2QixHQUFHLElBQUksQ0FBQztBQUNoRCxDQUFDO0FBRkQsd0NBRUM7QUFFWSxhQUFLLEdBQUc7SUFDakIsVUFBVSxFQUFFLGFBQWE7Q0FDNUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL21haW4udHNcIik7XG4iLCJcclxuaW1wb3J0IHsgSUVzdHVkaWFudGUgfSBmcm9tIFwiLi9Fc3R1ZGlhbnRlSW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXN0dWRpYW50ZSBpbXBsZW1lbnRzIElFc3R1ZGlhbnRlIHtcclxuICAgIG5vbWJyZTogc3RyaW5nO1xyXG4gICAgYXBlbGxpZG86IHN0cmluZztcclxuICAgIGVkYWQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG5vbWJyZTogc3RyaW5nLCBhcGVsbGlkbzogc3RyaW5nLCBlZGFkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcclxuICAgICAgICB0aGlzLmFwZWxsaWRvID0gYXBlbGxpZG87XHJcbiAgICAgICAgdGhpcy5lZGFkID0gZWRhZFxyXG4gICAgfVxyXG4gICAgc3VzcGVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgc3VzcGVuZGlkbzogJHt0aGlzLm5vbWJyZX0sICR7dGhpcy5hcGVsbGlkb31gO1xyXG4gICAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIGFsdW1ub1NhbHVkYShuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAkKCdib2R5JykuYXBwZW5kKGBcclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPGgzPkNPTU1PTkpTOiBGdW5jacOzbiBleHBvcnRhZGEgY29tbW9uanMtYWx1bW5vRm46ICR7bmFtZX0gPC9oMz5cclxuICAgIGApO1xyXG59XHJcblxyXG5leHBvcnQgPSBhbHVtbm9TYWx1ZGE7XHJcblxyXG5cclxuIiwiXHJcblxyXG5jbGFzcyBQcm9mZXNvciB7XHJcblxyXG4gICAgbm9tYnJlOiBzdHJpbmc7XHJcbiAgICBlZGFkOiBudW1iZXI7XHJcbiAgICBlc3RhZG86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihub21icmU6IHN0cmluZywgZWRhZDogbnVtYmVyLCBlc3RhZG86IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcclxuICAgICAgICB0aGlzLmVkYWQgPSBlZGFkO1xyXG4gICAgICAgIHRoaXMuZXN0YWRvID0gZXN0YWRvO1xyXG4gICAgfVxyXG4gICAgZGVzcGVkaXIoKSB7XHJcbiAgICAgICAgdGhpcy5lc3RhZG8gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNhbHVkYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBIb2xhIHNveSBlbCBwcm9mZXNvciAke3RoaXMubm9tYnJlfSBcclxuICAgICAgICB0ZW5nbyAke3RoaXMuZWRhZH0geSBtaSBlc3RhZG8gZXMgJHt0aGlzLmVzdGFkb31gO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0ID0gUHJvZmVzb3I7IiwiXHJcblxyXG4vLyBMaWJzIEJhc2U6IGpxdWVyeSwgYXhpb3MsIGxvZGFzaCwgdnVlLCBib290c3RyYXBcclxuXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58ICAgICAgICAgICAgICAgICAgICBDT01NT05KUyBOT0RFSlMgKCBXZWJwYWNrKVxyXG58ICAgRVhURVJOQUwgTElCUyBJTiBub2RlX21vZHVsZXNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgXHJcbnwgSW5zdGFsbCB0aGUgbGlicyB3aXRoIFxyXG58IG5wbSBpIC0tc2F2ZSBqcXVlcnkgYXhpb3MgbG9kYXNoIHZ1ZSBib290c3RyYXBcclxufFxyXG4qL1xyXG5cclxuLy8gaW1wb3J0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG4vLyB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgICAgICAgICAgICAgICAgICAgICAgICBDT01NT05KUyBOT0RFSlMgKCBXZWJwYWNrKSBcclxufCBJTVBPUlRBTkRPIFNVUyBQUk9QSU9TIE1PRFVMT1MgQ09OIEZVTkNJT05FU1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCAgXHJcbiovXHJcbi8vRnVuY3Rpb24gXHJcbmltcG9ydCBhbHVtbm9TYWx1ZGEgPSByZXF1aXJlKCcuL2NvbW1vbmpzLWFsdW1ub0ZuJyk7XHJcbi8vIE91dHB1dCBpbiBib2R5XHJcblxyXG4vLyBNb3N0cmFuZG8gbGEgc2FsaWRhIHBhcmEgdGVzdCBcclxuXHJcbmFsdW1ub1NhbHVkYShcIlBhY29cIik7XHJcblxyXG4vLyBDb25zdGFudGUgZGUgb3BjaW9uZXMgb2JqZXRvXHJcbmltcG9ydCBvcHRpb25zMSA9IHJlcXVpcmUoJy4vY29tbW9uanNPcHQnKTtcclxuLy8gJCgnYm9keScpLmFwcGVuZChgPGhyPjxoMj5PcGNpb25lczogJHtvcHRpb25zMS50aXR1bG99PC9oMj5gKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIENsYXNlIFByb2Zlc29yXHJcbmltcG9ydCBQcm9mZXNvciA9IHJlcXVpcmUoJy4vY29tbW9uanNQcm9mZXNvcicpO1xyXG52YXIgamF2aWVyID0gbmV3IFByb2Zlc29yKCdKYXZpZXIgSmltZW5leiBNYXJ0w61uJywgMjIsIHRydWUpO1xyXG4kKCdib2R5JykuYXBwZW5kKGA8aHI+PGgyPlByb2Zlc29yIGRpY2U6ICR7amF2aWVyLnNhbHVkYXIoKX0gITwvaDI+YCk7XHJcblxyXG5cclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgICBFUzIwMTUgLSBCQUJFTCBpbXBvcnRcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgbG9hZCBjbGFzcyBpbiBFc3R1ZGlhbnRlLnRzXHJcbnxcclxuKi9cclxuXHJcbmltcG9ydCB7IEVzdHVkaWFudGUgfSBmcm9tICcuL0VzdHVkaWFudGUnO1xyXG5cclxubGV0IGdhcmNpYSA9IG5ldyBFc3R1ZGlhbnRlKFwiUGFjb1wiLCBcIkdvbWV6XCIsIDIyKTtcclxuJCgncm93JykuYXBwZW5kKGA8aHI+PGgyPiAke2dhcmNpYS5zdXNwZW5kZXIoKX0gIDwvaDI+YCk7XHJcblxyXG4kKFwiYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0cmFkb1wiKVxyXG59KTtcclxuXHJcbmltcG9ydCAqIGFzIHByb2ZlIGZyb20gJy4vcHJvZmVzb3JGbic7XHJcblxyXG4kKCdib2R5JykuYXBwZW5kKGAgJHtwcm9mZS5wcm9mZXNvclNhbHVkYSgnPGgzPlNveSBlbCBOdWV2byBwcm9mZSwgbGxhbWFybWUgYWw8L2gzPicpfSxUZWw6ICR7cHJvZmUuZGF0b3MudGVsZWZvbm99YCk7XHJcblxyXG5cclxuLyogT1VUUFVUUyBTQUxJREFTICovXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9mZXNvclNhbHVkYShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAncHJvZmVzb3JGbi50cyBFUzYgTW9kdWxlczogJyArIG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYXRvcyA9IHtcclxuICAgIFwidGVsZWZvbm9cIjogXCI2MDAgMTAwIDIwMFwiXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=