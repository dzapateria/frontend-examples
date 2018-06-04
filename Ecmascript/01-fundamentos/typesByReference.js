/*
|-------------------------------------------------------------------------
|       ARRAYS - REFERENCE TYPES
|-------------------------------------------------------------------------
*/

typeof [1, 2, 3, 4] // Returns "object"
typeof { name: 'John',age: 34 } // Returns "object"
typeof new Date() // Returns "object"
typeof function () {} // Returns "function"
typeof myCar // Returns "undefined" *
typeof null // Returns "object"

console.log(typeof ['a', 2]) //=> object of array prototype

// Reference Array value example 1
let a = [1, "b", true];
let b = a;
b[0] = 2;
console.log(a, b); //=> 2 2

// Reference Array value example 2
let a = [1, "b", true];
let b = a; // b reference to a array
a[0] = 2; // Change value of b also
console.log(a, b); //=> 2 2

// value of Array no reference. 
let a = [1, "b", true];
let b = a[0]; // value independient
b = 2;
console.log(a[0], b); //=> 1 2


// Array
typeof [] // => "object"
a = [1];
typeof a // => "object"
a = [1];
typeof a[0] // =>  "number"


typeof a[0] // => "string"
a = [1, "b", true, {}];
typeof a[0] // => "string"
a = [1, "b", true, {}];
typeof a[1] // => "boolean"

[].constructor; // => Array()
Array(1, 2); // => Array
Array.prototype; // => List of methods of Object Array
[].constructor.prototype; // => List of methods of Object Array

a1 = [1, 2];
typeof a;

a2 = new Array([1, 2]);


/*
|-------------------------------------------------------------------------
|       OBJECTS - REFERENCE TYPES
|-------------------------------------------------------------------------
*/

// Reference to Object property example
console.log(typeof {
    a: 1
}) //=> object

const c = {
        a: 1
    },
    d = c;




/**** INDEFINIDOS O INEXISTENTES */
console.log(typeof undefined) // => undefined
console.log(typeof null) // => object (limpia memoria)




// Object
a = {};
a.constructor // => Object()
Object(); // Constructor
Object.prototype; // List of methods of Object prototype
a.constructor.prototype; // => List of methods of Object prototype
