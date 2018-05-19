// Cursos disponibles: TypeScript, Angular, JavaScript

// let cursoComprado = 'TypeScript';
// cursoComprado = 'React';

// ALIAS 
type Curso = 'TypeScript' | 'Angular' | 'JavaScript';

let cursoComprado: Curso;
cursoComprado = 'Angular';
// cursoComprado = 'React'; // No se puede!

function comprarCurso(curso: Curso) {
    cursoComprado = curso;
}

comprarCurso('JavaScript');
// comprarCurso('React'); // No esta permitido
console.log('cursoComprado: ' + cursoComprado);

type FuncionCompra = (curso: Curso) => void;

const comprarCursoDesc: FuncionCompra = (curso) => {
    cursoComprado = curso;
};

comprarCursoDesc('TypeScript');
console.log('cursoComprado: ' + cursoComprado);