"use strict";

// Comentario en linea

/*
* Comentario Multilinea 
*/


// Salida 
console.log("Hello World");

// Detener en ejecución en chrome Dev tool

 let o = {
     a: 5
 };
function add(x){
   
   let y = o.a;
    //debugger;
    function addOne(j) {
        //debugger;
       return j;

    }
    function restOne(j){
       --j;
       return j;
    }
    if (y <= 10) {
        //debugger;
        addOne(y);
    }else{
        restOne(y);
    }
   
}

console.log(add(o));

