"use strict"


// retorna modificación sin cambiar valores
function add(x, y) {
    return x + y;
}

console.log(a, b);

//Retorna modificación sin cambiar valores
let c = 10; let d = 5;
let add2 = function (x, y) {
    return x + y;
};
console.log(add2(c,d));
console.log(`c vale: ${c} d vale: ${d}`);

//Retorna modificación cambiando el valor
let e = 10;
let f = 5;
let add3 = function (x, y) {
    e = x + y;
    return e;
};
console.log(`e comienza valiendo: ${e}`);
console.log(add3(e, f));
console.log(`e vale: ${e} f vale: ${f}`);

// Returno de true y funcion como parametro
let active = function(){
    check = 1;
    if (check){
    return true;
    }else {
        console.log("desactivada opcion");
        return false;
    }
};

function testActive(active){
    if (active()) {
        console.log("Opcion activada");
    }
}
testActive(active);
