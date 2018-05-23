

// Libs Base: jquery, axios, lodash, vue, bootstrap

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
import alumnoSaluda = require('./commonjs-alumnoFn');
// Output in body

// Mostrando la salida para test 

alumnoSaluda("Paco");

// Constante de opciones objeto
import options1 = require('./commonjsOpt');
// $('body').append(`<hr><h2>Opciones: ${options1.titulo}</h2>`);

// -------------------------------------------

// Clase Profesor
import Profesor = require('./commonjsProfesor');
var javier = new Profesor('Javier Jimenez Martín', 22, true);
$('body').append(`<hr><h2>Profesor dice: ${javier.saludar()} !</h2>`);


/*
|--------------------------------------------------------------------------
|   ES2015 - BABEL import
|--------------------------------------------------------------------------
| load class in Estudiante.ts
|
*/

import { Estudiante } from './Estudiante';

let garcia = new Estudiante("Paco", "Gomez", 22);
$('row').append(`<hr><h2> ${garcia.suspender()}  </h2>`);

$("button").click(function () {
    console.log("registrado")
});

import * as profe from './profesorFn';

$('body').append(` ${profe.profesorSaluda('<h3>Soy el Nuevo profe, llamarme al</h3>')},Tel: ${profe.datos.telefono}`);


/* OUTPUTS SALIDAS */
