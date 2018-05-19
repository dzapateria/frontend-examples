// INTERFACES + CLASES

class Curso {
    static MINIMO: number = 10;

    static getInfo(curso: Curso): string {
        return JSON.stringify(curso);
    }

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

interface Escuela {
    id: number;
    nombre: string;
    cursos: Curso[];
}

class EscuelaDigital implements Escuela {
    private paginaWeb: string;
    public cursos: Curso[];

    constructor(private _id: number, public nombre: string, paginaWeb: string){
        this.paginaWeb = paginaWeb;
        this.cursos = [];
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    public agregarCurso(curso: Curso) {
        this.cursos.push(curso);
    }


    public empezarCurso(curso: Curso) {
        console.log(`Iniciando curso ${curso.nombre} en: ${this.paginaWeb}`);
    }
}


// const miEscuela = new Escuela('EDteam');
// console.log('miEscuela', miEscuela);

let escuela: EscuelaDigital;
escuela = new EscuelaDigital(1, 'EDteam', 'app.ed.team');
escuela.agregarCurso(new Curso(1, 'TypeScript'));
escuela.agregarCurso(new Curso(2, 'JavaScript'));
const angular = new Curso(3, 'Angular');
escuela.agregarCurso(angular);

// Dias despues...

escuela.empezarCurso(angular); //Polimorfismo!!

console.log('Nombre: ', escuela.nombre);
console.log('Escuela', escuela);

// static:
// Una propiedad "static" es accesible directamente con el uso de la clase
 const angularString = Curso.getInfo(angular);
 console.log('angularString: ', angularString);
 console.log('minimo de estudiantes por curso: ', Curso.MINIMO);


