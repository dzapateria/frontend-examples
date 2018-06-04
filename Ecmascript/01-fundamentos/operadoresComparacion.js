"use strict";

/***********************************
| Las comparaciones siempre tienen un resultado booleano.
***********************************/

// Igualdad == por valor
// Number
console.log(4 == 4) // => true
console.log(4 == 3) // => false
console.log(4 != 4) // => false
console.log(4 != 3) // => true
console.log(5 > 4); // => true
console.log(5 >= 4); // => true
console.log(5 < 4); // => false
console.log(5 <= 4); // => false
// String
console.log("a" == "a") // => true
console.log("a" == "b") // => false
console.log("a" != "a") // => false
console.log("a" != "b") // => true
// Boolean
console.log(true); // true
console.log(!true); // false
console.log(false); // false
console.log(!false); // true
console.log(true == 1) // => true
console.log(true == '1') // => true
console.log(true == true) // => true
console.log(true == !true) // => false
console.log(false == false) // => true
console.log(true != true) // => false
console.log(false != false) // => false
// Especiales
console.log(null == null) // => true
console.log(false != false) // => false
// Function
console.log( (function () {return true})() == true ); // => true
console.log((function () {return 1})() == true); // => true
console.log( (function () {return false})() == false); // => false
console.log( (function () {return false})() != true); // => false


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
console.log("4" != 4) // => false

// Exactitud === por valor y tipo
console.log(4 === 4) // => true
console.log(4 === "4") //=> false
console.log("4" === 4) // => false
console.log("4" === "4") // =>true
console.log("4" !== "4") // =>true



/*
|--------------------------------------------------------------- 
|       Lógicos (AND & OR)
|---------------------------------------------------------------
*/
console.log(true && true); // => true
console.log(true && !false); // => true
console.log(!false && !false); // => true
console.log(true && false); // => false
console.log(false && false); // => false

console.log(true || true); // => true
console.log(true || !false); // => true
console.log(!false || !false); // => true
console.log(true || false); // => true
console.log(false || false); // => false


/*
|--------------------------------------------------------------- 
|       Condicional Ternary Operator
|---------------------------------------------------------------
*/

age = Number('x');
if (isNaN(age)) {
    puedeVotar = "Respuesta no es número";
    return console.log(puedeVotar);
} else {
    puedeVotar = (age < 18) ? "Eres Menor" : "Puede votar";
    return console.log(puedeVotar);
}