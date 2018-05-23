
import { IEstudiante } from "./EstudianteInterface";

export class Estudiante implements IEstudiante {
    nombre: string;
    apellido: string;
    edad: number;
    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }
    suspender() {
        return `suspendido: ${this.nombre}, ${this.apellido}`;
    }
}
