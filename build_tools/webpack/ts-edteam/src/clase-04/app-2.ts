// Get y Set

class Curso {
    constructor(private _id: number, private readonly _nombre: string) {
    }

    get id() {
        return this.id;
    }

    // Permite actualizar el "id"
    set id(id: number) {
        this._id = id;
    }
}

class EscuelaDigital {
    private cursos: Curso[];

    constructor(private _nombre: string) {
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
}

let escuela: EscuelaDigital;
// const escuela = new EscuelaDigital('EDteam');
escuela = new EscuelaDigital('EDteam');
escuela.agregarCurso(new Curso(1, 'TypeScript'));
escuela.agregarCurso(new Curso(2, 'JavaScript'));

// console.log('nombre: ', escuela.nombre); // No es valido
// console.log('cursos: ', escuela.cursos);

console.log('Nombre: ', escuela.nombre); // GET nombre()
escuela.nombre = 'ED';    // SET nombre()
console.log('Nombre: ', escuela.nombre); // GET nombre()

console.log('escuela', escuela);
