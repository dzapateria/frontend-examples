//index.js
import escribir_en_pantalla from './bar';
import { square, diag } from './cuadradolib';



escribir_en_pantalla();

console.log("INDEX.TS cargo y imprime este mensaje");


console.log(square(15)); // 121
console.log(diag(4, 3)); // 5