$('body').append(` <h1>es2015.ts</h1>`);


import { Ordenador } from "./es2015/Ordenador";


let lenovo = new Ordenador("lenovo y700", 830, 17);


$('.ordenador').append(
    `
    Modelo: ${lenovo.modelo} 
    Precio: ${lenovo.pvp}
    Pulgadas: ${lenovo.pantalla}
    `
)