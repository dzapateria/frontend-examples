"use strict";

let a = [
    12,
    "foo",
    true,
    {
        num: 1,
        texto: "bar",
        activo: true
    },
    [1, 'b', false]
];

// Leer valores

console.log(a[0]); // 12
console.log(a[1]); // "foo" string
console.log(a[2]); // true boolean
console.log(a[3]); // { num: 1, texto: 'bar', activo: true } Object
console.log(a[3].num); // 1
console.log(a[3].texto); // 'bar'
console.log(a[3].activo); // true
console.log(a[4]); // [ 1, 'b', false ] Array
console.log(a[4][0]); // 1 
console.log(a[4][1]); // b
console.log(a[4][2]); // false

// Cambiar valores
a[4][2] = true;
console.log(a); // true