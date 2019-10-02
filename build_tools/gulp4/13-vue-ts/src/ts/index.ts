//index.js
import { Person } from './app';
import { pepa } from "./constantes";
import { diag, square } from './cuadradolib';
import escribir_en_pantalla from './documentwrite';
import Jq from './jquery_examples';
import Lo from './lodash_examples';

const person1: Person = new Person('krunal');

console.log(person1.myName());

const person2: Person = new Person('Stavros', 1);

console.log(person2.myName() + '\n' + person2.myId());

escribir_en_pantalla('Hola escrito desde funcion de parametro');

console.log("INDEX.TS cargo y imprime este mensaje");
console.log(pepa);



console.log(square(25)); // 121
console.log(diag(4, 3)); // 5


const query = new Jq();
query.tipo();
query.botonborra();

