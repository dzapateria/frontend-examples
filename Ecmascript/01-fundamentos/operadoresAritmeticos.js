"use strict";


/*
|----------------------------------------------------------
|          OPERADORES UNARIOS ARITMÉTICOS
|----------------------------------------------------------
*/
    let a = 8;
    console.log(a);   //=> 8
    console.log(--a); //=> 7
    console.log(a);   //=> 7
    ++a;
    console.log(a);   //=> 8
    console.log(++a); //=> 9
    console.log(a);  // => 9

     let a = 100;
     console.log(a++); //=> 100
     console.log(a); //=> 101
     console.log(a--); //=> 101
     console.log(a); //=> 100



/*
|----------------------------------------------------------
|          OPERADORES ARITMÉTICOS
|----------------------------------------------------------
*/

    console.log("Suma +:", 2.5 + 2.5); //=> 5
    console.log("Resta - : ", 2.5 - 2); //=> 0.5
    console.log("Multiplicar * : ", 4 * 2.5); //=> 10
    console.log("Dividir / : ", 100 / 3); //=> 33.333333
    console.log("Modulo % : ", 100 % 3); //=> 1
    

    /* Modulo % o resto */
    console.log("Resto % : ", 10 % 2); //=> 0
    console.log("Resto % Impar (7 % 2): ", 7 % 2); //=>  1
    console.log(56 % 5); //=>  1

    /* Existe precedencia de operadores , usa () si deseas alterarlo */
    console.log("Precedencia: ", 100 + 50 * 2); //=> 200
    console.log("Precedencia ():", (100 + 50) * 2); //=> 300

    // Strings el operador + tiene sobrecarga de operador y pega las palabras.
    console.log("Pablo" + " " + "Garcia"); //=> Pablo Garcia

/*
|----------------------------------------------------------
| Type Coercion
|----------------------------------------------------------
|   Operaciones de diferente tipo. convierte los tipos 
|   > La suma con un String siempre pega como strings
|   > El resto de operaciones con string lo trata de convertir si es número
|----------------------------------------------------------
*/

    // String ? Number = string concatenada
    console.log('2' + 100); // => 2100 ??
    console.log("2" + 5.5); // => 25.5 ??

    // Booleano ? número = operar con 1 o 0
    console.log(true + 100); // => 101 ( 1 + 100 )
    console.log(false + 100); // => 100  ( 0 + 100)
    console.log(35 * false); // => 0 ( 35 * 0)
    console.log(false + false); // => 0 ( 0 + 0)
    console.log(true + true); // => 2 ( 1 + 1)
    console.log(true + false); // => 1 (1 + 0)

    // String ? String = Pega los valores como texto
    console.log("Hola" + " Que tal"); //=> Hola que tal

    console.log("2" + "2"); //=> 22
    console.log(true + "100"); // => true100
    console.log("true" + 100); // => true100
    console.log(1 + 3  + 4 + 5 + "1"); // => 131 (13 pegado a 1)
    console.log( 3 * "5"); // 15
    console.log( 10 - "2"); // 8


/*
|----------------------------------------------------------
| EVITANDO LA COERTION DE TIPOS
|----------------------------------------------------------
|    Usa los constructores de tipos
|    Number, String, Boolean para evitar la coertion.
|----------------------------------------------------------
*/
console.log(Number("2") + Number("2")); // => 4 Number
console.log(2 + Number("2")); // => 4 Number

console.log(Number("2") + 5.5); // => 7.5 Number
console.log(Number("2") + 5.5); // => 7.5 Number

console.log(Number('4') + 100); // => 104 Number

/******  */

/***** CARACTER ESCAPE *******/
console.log("Salto \n de carro"); // salto de carro

