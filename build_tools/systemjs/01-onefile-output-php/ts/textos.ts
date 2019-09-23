
const MENSAJES:string[] = [
    "el texto es muy corto",
    "El texto es demasiado largo"
]

function obtenerError(numError:number):string{
    return MENSAJES[numError];
}
