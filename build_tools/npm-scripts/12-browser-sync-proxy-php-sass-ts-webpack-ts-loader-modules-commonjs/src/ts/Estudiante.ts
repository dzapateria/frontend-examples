
import { Persona } from "./IPersona";

export class Estudiante implements Persona {
    nombre: string;
    apellido: string;
    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    suspender() {
        return `suspendido: ${this.nombre}, ${this.apellido}`;
    }
}
