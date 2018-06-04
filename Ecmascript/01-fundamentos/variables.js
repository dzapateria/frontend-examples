"use strict";

// ============== El poblema de var ==============
    var a = 3;

    if(a<10){
        var a = 10;
    console.log(a);
    }
    console.log(a) // Me cambio el valor de a
    //=> 10 10

//======== EJEMPLO 2

    let b = 3;

    if (b < 10) {
        let b = 10;
        console.log(b);
    }
    console.log(b)
    //=> 10 3

//======== EJEMPLO 3

    var c = 3;

    if (c < 10) {
        let c = 10;
        console.log(c);
    }
    console.log(c) 
    //=> 10 3






// Comentario en linea

/*
* Comentario Multilinea 
*/


// Salida 
console.log("Hello World");


//=============== especiales ================ |

a = undefined; // Variable sin definir
b = null; // Variable inexistente

/*
|----------------------------------------------------------
|           VARIABLES
|----------------------------------------------------------
*/

var a, b, c;
a = 2;




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

// var


// let


// const