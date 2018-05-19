let mensaje = 'Hola mundo TypeScript!';
console.log(mensaje);
let mensajes = [
    {
        contenido: 'Hola'
    },
    {
        contenido: 'typeScript'
    },
    {
        contenido: 'Hasta pronto'
    }
];

mensajes.map((mensajeActual) => mensajeActual.contenido.toUpperCase());

// type: number
let estudiantes: number;
estudiantes = 10;
// estudiantes = 'hola mundo';

function suma(a: number, b: number) {
    return a + b;
}

suma(1, 3);

// type: string
// Primera forma
let nombre = 'Luis';
let apellido:string = 'Aviles';

// ES6. Template literals
let nombreCompleto = `${nombre} ${apellido}`;
console.log('Mi nombre es: ' + nombreCompleto);

let nombreCompleto2: string = `
<title>
    Luis
    Aviles
</title>
`;
console.log('Mi nombre es: ' + nombreCompleto2);

// type: boolean
let inscrito:boolean = true;
inscrito = true;
mensaje = inscrito? 'Bienvenido al curso': 'Suscribete! :-)';
console.log(mensaje);

// type: void

function mostrarEstadoInscripcion(inscrito: boolean): void {
    mensaje = inscrito? 'Bienvenido al curso': 'Suscribete! :-)';
    console.log(mensaje);
}

let resultado = mostrarEstadoInscripcion(inscrito);
console.log('resultado', resultado);

// type: undefined
let desconocido: undefined;
desconocido = undefined;

// type: null
let nulo: null;
nulo = null;

// type: any
let nombreCurso:any = "TypeScript";
nombreCurso = 10;
nombreCurso = true;
nombreCurso = null;

// usando tipos en funciones

function saludo(nombre?: string): string {
    if(!nombre) {
        nombre = 'Luis';
    }
    return 'Hola ' + nombre;
}

console.log(saludo('Roberto'));
console.log(saludo());

function sumaMultiple(a: number, b: number, c?: number, d?: number): number {
    if(!c)
        c = 0;
    if(!d)
        d = 0;
    return a + b + c + d;
}

console.log('suma: ', sumaMultiple(1, 2, 3, 4));
console.log('suma: ', sumaMultiple(1, 2));

// Arreglos
let nombres: string[] = ['Luis', 'Juan', 'Maria'];
let apellidos: Array<string>;
apellidos = ['Aviles', 'Fernandez', 'Perez'];

// Tuplas

let pedido: [string, number, boolean];
pedido = ['Pizza', 10, true];

console.log('pedido', pedido);

let arreglo: number[] = [];
arreglo.push(1);
arreglo.push(2);

let arreglo2: number[];
arreglo = [1, 2, 3];

let arreglo3: Array<number>;








