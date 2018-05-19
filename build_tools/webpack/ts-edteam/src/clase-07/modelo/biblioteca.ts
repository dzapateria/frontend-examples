import { Libro } from './libro';

export class Biblioteca {
    libros: Libro[];

    constructor() {
        this.libros = [];
    }

    agregarLibro(libro: Libro) {
        this.libros.push(libro);
    }

    buscarLibro(titulo: string) {
        return this.libros.find(function(libro: Libro) {
            return libro.titulo.toLowerCase().indexOf(titulo.toLowerCase()) >= 0;
        })
    }
}

//GET locashost:3000/libros -> [{}, {}, {}]
//GET localhost:3000/libro/titulo -> {}