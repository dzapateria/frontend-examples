var diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

console.log(typeof diasDeLaSemana);
console.log(diasDeLaSemana[1]);

var usuario = {
    email: 'dzapateria@gmail.com',
    tel: '601 418 518',
    edad: 39,
    saldo: 22,
    administrador: true
}

var fecha = {
    diaSemana: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    mes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
}

console.log(fecha.diaSemana[2]);


var libro = {
    titulo: "Como ser un Lider",
    autor: "John Maxwell",
    pvp: 19,
    fechaPublicacion: 2013,
    id: "ISBM9210392",
    temas: ["exito", "negocios", "liderazgo", "empresariales", "extrangeros", "no ficcion"]
}

var menu = {
    color: '#4CAF50',
    backgroundColor: '#FFFFFF',
    font: 'Arial',
    fontSize: 17
}

var libroPlantilla = {
    titulo: '',
    autor: String,
    pvp: Number,
    fechaPublicacion: Number,
    id: "",
    temas: []
}