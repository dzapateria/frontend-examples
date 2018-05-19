// Interfaces

interface ICurso {
    nombre: string;
    identificador?: number;
}

let miniCurso: ICurso;
miniCurso = {
    nombre: 'TypeScript',
    identificador: 1
};

interface ICursos {
    items: ICurso[]
}

let miniCursos: ICursos;

function crearCurso(params: ICurso): ICurso {
    return {
        nombre: params.nombre,
        identificador: params.identificador
    } as ICurso;
}

const nuevoCurso = crearCurso({
    nombre: 'JavaScript',
    identificador: 2
});

console.log('nuevoCurso', nuevoCurso);

const cursoAngular = crearCurso({
    nombre: 'Angular'
});

console.log('cursoAngular', cursoAngular);

// Extender Interfaces
interface CursoEDTeam extends ICurso {
    costo: number;
}

// Ejemplo CursoEDTeam
const primerCursoED: CursoEDTeam = {
    costo: 20,
    nombre: 'JavaScript',
    identificador: 10
}

console.log('curso EDteam', primerCursoED);