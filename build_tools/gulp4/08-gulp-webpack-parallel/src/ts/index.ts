//index.js
import escribir_en_pantalla from './documentwrite';
import { square, diag } from './cuadradolib';



escribir_en_pantalla('Hola escrito desde funcion de parametro');

console.log("INDEX.TS cargo y imprime este mensaje");


console.log(square(25)); // 121
console.log(diag(4, 3)); // 5