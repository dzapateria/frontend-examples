import bar from './bar';

bar();

console.log("He i am index.ts 2x");

import { square, diag } from './cuadradolib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5