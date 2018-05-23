"use strict"

/***********************************
|    Forzar respueta boleana
***********************************/

console.log(Boolean(undefined)); // => false
console.log(Boolean(null)); // => false
console.log(Boolean(false)); // => false
console.log(Boolean(0)); // => false
console.log(Boolean("")); // => false

console.log(Boolean("false")); // => true
console.log(Boolean("0")); // => true
console.log(Boolean(" ")); // => true
console.log(Boolean(" . ")); // => true
console.log(Boolean("1")); // => true
console.log(Boolean(1)); // => true
console.log(Boolean(true)); // => true
console.log(Boolean({})); // => true
console.log(Boolean([])); // => true
console.log(Boolean([0])); // => true



/***********************************
|    Forzar respueta boleana
***********************************/
// Compara == por valor
console.log(4 == 4) // => true
console.log("4" == 4) // => true
console.log(4 == "4") // =>true
console.log("4" == "4") // =>true
console.log("4" == 3) // =>false
console.log(4 == 2) // => false
console.log("a" == "a") // => true
// Compara exactitud === por valor y tipo
console.log(4 === 4) // => true
console.log(4 === "4") //=> false
console.log("4" === 4) // => false
console.log("4" === "4") // =>true

console.log(4 > 4);
console.log(4 >= 4);