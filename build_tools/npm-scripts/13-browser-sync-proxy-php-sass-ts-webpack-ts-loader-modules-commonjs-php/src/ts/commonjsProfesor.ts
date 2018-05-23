

class Profesor {

    nombre: string;
    edad: number;
    estado: boolean;
    constructor(nombre: string, edad: number, estado: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.estado = estado;
    }
    despedir() {
        this.estado = false;
    }
    saludar() {
        return `Hola soy el profesor ${this.nombre} 
        tengo ${this.edad} y mi estado es ${this.estado}`;
    }

}

export = Profesor;