"use strict";

x = false;
try{
    if (x){ 
    return "Good";
    console.log("Esto no se ejecuta");
    } else{ 
    throw "Error dio falso"; 
    console.log("Esto no se ejecuta");
    }
}
catch(err){
    console.log("Error: ", err);
}