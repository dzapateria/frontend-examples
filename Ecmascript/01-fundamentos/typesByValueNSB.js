"use strict";

/* 
5 different data types that can contain values:
    string, number, boolean, object, function
There are 3 types of objects:
    Object, Date, Array
And 2 data types that cannot contain values:
    null, undefined
*/


/*
|-------------------------------------------------------------------------
|       PRIMITIVE OBJECTS - VALUE TYPES
|-------------------------------------------------------------------------
*/

//============= Number =================|
    console.log(typeof a) // => number
    typeof NaN // Returns "number"
    /* Create number objects */
        Number(1);
        a = 9.99;
        b = Number(9.99); 
        a === b; // => true

    /* Devolver la funcion constructora */
        console.log(typeof a.constructor) // => "function"
        a.constructor;            // => ƒ Number() { [native code] }
        Number(9.99).constructor; // => ƒ Number() { [native code] }
        (1.99).constructor;       // => ƒ Number() { [native code] }

    /* prototype: Lista los métodos del prototipo */
        console.log(typeof a.constructor.prototype); // => "object"
        Number.prototype; // => Number {}
        (1.99).constructor.prototype; // => Number {}
        a.constructor.prototype; // => Number {}


//============= String =================|
    console.log(typeof "OK") // => string

    /* Create string objects */
        String('a'); 
        a = "ok";
        b = String("ok"); 
        a === b; // => true

    /* Devolver la funcion constructora */
        console.log(typeof a.constructor) // => "function"
        a.constructor;          // => ƒ String() { [native code] }
        String('a').construtor; // => f String() { [native code] }
        'a'.constructor;        // => ƒ String() { [native code] }

    /* prototype: Lista los métodos del prototipo */
        console.log(typeof true.constructor.prototype); // => "object"
        String.prototype; // prototype
        (true).constructor.prototype; // => Boolean {}

//============= Boolean =================|
    console.log(typeof false) // => boolean

    Boolean();
    Boolean.prototype;



let a = 1, b = a;
b = 2; 
console.log(a, b); //=> 1 2


