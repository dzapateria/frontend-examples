// primitivos valor
var noexiste = null;
var sindefinir = undefined;
var numero = 2;
var texto = "Operación realizada correctamente";
var boleano = true;
// Objetos referencia
var voc = ['a', 'e', 'i'];
var vocales = voc;
var vocales = ['o', 'u'];
console.log(vocales, voc);
//=> 

var lista = [undefined, true, false, 22, { estado: true }, { edad: 22 }, "Mantequilla"];
var objeto = { estado: true };
var objeto2 = { edad: 22 };
var objeto3 = { nombre: "javier" };
var coleccion = { objeto, objeto2, objeto3, lista };

var fn1 = function mostrar(x) { console.log(x) };


console.log(typeof sindefinir);
//=> undefined
console.log(typeof numero);
//=> number
console.log(typeof texto);
//=> string
console.log(typeof boleano);
//=> booleano
console.log(typeof lista);
