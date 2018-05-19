// Definir una clase con TS

class Curso {
    constructor(private id: number, private readonly nombre: string) {
    }
}

class EscuelaDigital {
    private cursos: Curso[];

    constructor(private nombre: string) {
        this.cursos = [];
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
console.log('escuela', escuela);
