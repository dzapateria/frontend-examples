
import { Estudiante } from './Estudiante';

let primero = new Estudiante("paco", "Gomez");

document.body.innerHTML += "<h1> " + primero.saludar() + "!</h1>";
console.log("me he cargado");