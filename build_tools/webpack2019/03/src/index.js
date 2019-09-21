import bar from './bar';

bar();

console.log("Soy el index.js super");

import { square, diag } from './cuadradolib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5