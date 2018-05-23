"use strict"

/*************** TIPOS **********/
console.log(typeof "OK") // => string
console.log(typeof "") // => string
console.log(typeof 3.14) // => number
console.log(typeof false) // => boolean
console.log(typeof true) //=> boolean
console.log(typeof []) //=> object
console.log(typeof ['a', 2]) //=> object
console.log(typeof {}) //=> object


console.log("Suma +:", 2.5 + 2.5); //=> Suma: 5
console.log("Resta - : ", 2.5 - 2); //=> Suma: 5
console.log("Multiplicar * : ", 4 * 2.5); //=> Multiplicar: 10
console.log("Dividir / : ", 100 / 3); //=> Dividir: 5
console.log("Resto % : ", 10 % 2); //=> 0
console.log("Resto % Impar (7 % 2): ", 7 % 2); //=>  1
console.log("Precedencia: ", 100 + 50 * 2); //=> 200
console.log("Precedencia ():", (100 + 50) * 2); //=> 300
console.log("sobrecarga1", "San" + " " + "Juan"); //=>

/***** Type Coerstion *******/
console.log(2 + "2"); // => 22
console.log('2' + 100); // => 2100
console.log(true + 100); // => 101
console.log(false + 100); // => 100
console.log(false + false); // => 0
console.log(true + true); // => 2
console.log(true + false); // => 1
console.log("Operacion exitosa" + 100); // => Operación exitosa100



/***** CARACTER ESCAPE *******/
console.log("Salto \n de carro"); // salto de carro