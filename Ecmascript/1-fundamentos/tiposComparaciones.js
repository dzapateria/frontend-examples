"use strict";

/********* Value Types **********/

console.log(typeof "OK") // => string
console.log(typeof 3.14) // => number
console.log(typeof false) // => boolean


Number();

String();

Boolean();



/********* Reference Types ********** */
console.log(typeof ['a', 2]) //=> object array
console.log(typeof {}) //=> object


Object();

Array();

a1 = [1, 2]; 
typeof a;

a2 = new Array([1, 2]);




/**** INDEFINIDOS O INEXISTENTES */
console.log(typeof undefined) // => undefined
console.log(typeof null) // => object (limpia memoria)











/***********************************
|    Forzar respueta boleana
***********************************/
// Number
console.log(Boolean( 1 )); // => true
console.log(Boolean( 0 )); // => false
console.log(Boolean(Number("0"))); // => false
// String
console.log(Boolean("")); // => false
console.log(Boolean(" ")); // => true
console.log(Boolean("true")); // => true
console.log(Boolean("false")); // => true
console.log(Boolean( String(false) )); // => true
console.log(Boolean("1")); // => true
console.log(Boolean("0")); // => true
console.log(Boolean( Number("1") ) ); // => true

// Boolean
console.log(Boolean(false)); // => false
console.log(Boolean(true)); // => true

// ------------------ NO PRIMITIVES TYPES

// Objects
console.log(Boolean({})); // => true
console.log(Boolean({a: true})); // => true
console.log(Boolean({a: false})); // => true
// array
console.log(Boolean([])); // => true
console.log(Boolean([1])); // => true
console.log(Boolean([0])); // => true
console.log(Boolean([true])); // => true
console.log(Boolean([false])); // => true
console.log(Boolean(['0'])); // => true
console.log(Boolean([false])); // => true

// Return function ( Example with IIFF)
console.log((function () {return false})()); // => false
console.log(Boolean((function () {return 0})())); // => false

console.log((function () {return true})()); // => true
console.log(Boolean((function () {return 1})())); // => true

// Otros
console.log(Boolean(undefined)); // => false
console.log(Boolean(null)); // => false

/***********************************
|   COM
***********************************/
// Igualdad == por valor
// Number
console.log(4 == 4) // => true
console.log(4 == 3) // => false
console.log(4 != 4) // => false
console.log(4 != 3) // => true
console.log(5 > 4); // =>true
console.log(5 >= 4); // =>true
console.log(5 < 4); // =>false
console.log(5 <= 4); // =>false
// String
console.log("a" == "a") // =>true
console.log("a" == "b") // =>false
console.log("a" != "a") // =>false
console.log("a" != "b") // =>true
// Boolean
console.log(true == 1) // =>true
console.log(true == '1') // =>true
console.log(true == true) // =>true
console.log(false == false) // =>true
console.log(true != true) // =>false
console.log(false != false) // =>false
// Objects
console.log( (function () {return true})() == true ); // => true
console.log((function () {return true})() == false); // => false
console.log((function () {return false})() != true); // => false


/***********************************
|   ENTRE DIFERENTES TIPOS
***********************************/

console.log("4" == 4) // => true
console.log("4" == 3) // =>false
console.log(4 == "4") // =>true

console.log(4 != "4") // =>false
console.log(5 != "4") // =>true

console.log('true' != true) // =>false
console.log("true" == true) // =>false

console.log(4 == 2) // => false
console.log("a" == "a") // => true
console.log("4" != 4) // => true

// Exactitud === por valor y tipo
console.log(4 === 4) // => true
console.log(4 === "4") //=> false
console.log("4" === 4) // => false
console.log("4" === "4") // =>true
console.log("4" !== "4") // =>true



/***********************************
|   LOGICOS AND OR
***********************************/
// Igualdad == por valor
console.log(4 == 4) // => true
