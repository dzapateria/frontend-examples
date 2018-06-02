"use strict";

/*************** ARITMETICA PRECEDENCIA **********/
console.log("Suma +:", 2.5 + 2.5); //=> 5
console.log("Resta - : ", 2.5 - 2); //=> 0.5
console.log("Multiplicar * : ", 4 * 2.5); //=> 10
console.log("Dividir / : ", 100 / 3); //=> 33.333333
console.log("Resto % : ", 10 % 2); //=> 0
console.log("Resto % Impar (7 % 2): ", 7 % 2); //=>  1
console.log("Precedencia: ", 100 + 50 * 2); //=> 200
console.log("Precedencia ():", (100 + 50) * 2); //=> 300
console.log("Concatenar: ", "Pablo" + " " + "Garcia"); //=> San Juan

/***** Type Coercion *******/
console.log("2" + 5.5); // => 22 ??
console.log('2' + 100); // => 2100 ??
console.log(true + 100); // => 101 
console.log(false + 100); // => 100
console.log(false + false); // => 0
console.log(true + true); // => 2
console.log(true + false); // => 1
console.log("Operacion exitosa" + 100); // => Operación exitosa100

/***** Conversiones de tipos de datos *******/
console.log(Number("2")); // => 2 Number
console.log(Number("2") + 5.5); // => 7.5 Number
console.log(Number('2') + 100); // => 102 Number
console.log((100).toString()); //=> 100 string
console.log(parseFloat("5.5")); // => 5.5 Number
console.log(parseInt(5.5)); // => 5 Number
console.log(parseInt("5.5")); // => 5 Number


/***** CARACTER ESCAPE *******/
console.log("Salto \n de carro"); // salto de carro

