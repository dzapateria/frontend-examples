// Verificando tipos de datos
type CursoED = 'Angular' | 'TypeScript';
type CursoObj = {
    nombre: string,
    identificador: number
};

const primerCurso: CursoObj = {
    nombre: 'Angular',
    identificador: 1 
};

const cadenaCurso: string = `
{
    nombre: 'Angular',
    identificador: 1 
}
`;

function getIdCurso(c: string): number {
    const obj = JSON.parse(c);
    // return (obj as CursoObj).identificador; // "AS" syntax
    return (<CursoObj>obj).identificador;
}


