"use strict";

/*
|-------------------------------------------
|   ARRAYS
|-------------------------------------------
*/

var diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

/* console.log(diasDeLaSemana[0])
console.log(diasDeLaSemana[3]) */

var vocales = ['a', 'e', 'i', 'o', 'u'];
var numerosMix = ['uno', 'dos', 'tres', 4, 5, 6];
var listaCompra = ["Mantequilla", "Arroz", "Agua", "Pollo"]

/*
console.log(listaCompra[0])
console.log(listaCompra[3]) */

var coleccion = [
    vocales,
    diasDeLaSemana,
    listaCompra
]

console.log(coleccion[0][3]);
console.log(typeof coleccion[2]);
console.log(diasDeLaSemana[1]);



/*
|-------------------------------------------
|   MULTIDIMENSIONAL ARRAYS
|-------------------------------------------
*/







var usuario = {
    email: 'dzapateria@gmail.com',
    tel: '601 418 518',
    edad: 39,
    saldo: 22,
    administrador: true
}

var fecha = {
    diaSemana: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    mes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
}

console.log(fecha.diaSemana[2]);


var libro = {
    titulo: "Como ser un Lider",
    autor: "John Maxwell",
    pvp: 19,
    fechaPublicacion: 2013,
    id: "ISBM9210392",
    temas: ["exito", "negocios", "liderazgo", "empresariales", "extrangeros", "no ficcion"]
}

var menu = {
    color: '#4CAF50',
    backgroundColor: '#FFFFFF',
    font: 'Arial',
    fontSize: 17
}

var coleccionObj = {
    libro,
    menu,
    fecha
}

var libroPlantilla = {
    titulo: '',
    autor: String,
    pvp: Number,
    fechaPublicacion: Number,
    id: "",
    temas: []
}