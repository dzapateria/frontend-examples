

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
import alumnoSaluda = require('./alumno');
// Output in body

// Mostrando la salida para test 
$('body').append(
    `<hr><h2> Función alumnoSaluda("Paco") importada con import x = require('x') 
                    Devuelve: <br> ${alumnoSaluda("Paco")} </h2>`
);


// Constante con objeto
import optionsGlobal = require('./optionsGlobal');
$('body').append(`<hr><h2>Opciones: ${optionsGlobal.titulo}</h2>`);


/*
|--------------------------------------------------------------------------
|   ES2015 - BABEL import
|--------------------------------------------------------------------------
| load class in Estudiante.ts
|
*/

import { Estudiante } from './Estudiante';

let garcia = new Estudiante("Paco", "Gomez");
$('row').append(`<hr><h2> ${garcia.suspender()}  </h2>`);

$("button").click(function () {
    console.log("registrado")
});


/* OUTPUTS SALIDAS */
