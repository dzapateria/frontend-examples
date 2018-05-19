// HERENCIA

class Curso {
    constructor(private _id: number, private _nombre: string) {
    }

    get id() {
        return this.id;
    }

    // Permite actualizar el "id"
    set id(id: number) {
        this._id = id;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
}

abstract class Escuela {
    protected cursos: Curso[];

    constructor(protected _nombre: string) {
        this.cursos = [];
    }

    get nombre() {
        return this._nombre.toUpperCase();
    }

    set nombre(nombre: string) {
        if(nombre.length <= 3) {
            return;
        }

        this._nombre = nombre;
    }

    public agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }

    abstract empezarCurso(curso: Curso): void;
}

class EscuelaDigital extends Escuela {
    private paginaWeb: string;

    constructor(nombre: string, paginaWeb: string){
        super(nombre);
        this.paginaWeb = paginaWeb;
    }

    public empezarCurso(curso: Curso) {
        console.log(`Iniciando curso ${curso.nombre} en: ${this.paginaWeb}`);
    }
}


// const miEscuela = new Escuela('EDteam');
// console.log('miEscuela', miEscuela);

let escuela: Escuela;
escuela = new EscuelaDigital('EDteam', 'app.ed.team');
escuela.agregarCurso(new Curso(1, 'TypeScript'));
escuela.agregarCurso(new Curso(2, 'JavaScript'));
const angular = new Curso(3, 'Angular');
escuela.agregarCurso(angular);

// Dias despues...

escuela.empezarCurso(angular); //Polimorfismo!!

console.log('Nombre: ', escuela.nombre);
console.log('Escuela', escuela);

