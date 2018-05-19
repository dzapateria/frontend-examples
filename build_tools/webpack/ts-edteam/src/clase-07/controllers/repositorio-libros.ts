import { Biblioteca } from "../modelo/biblioteca";
import { Libro } from "../modelo/libro";

export class RepositorioLibros {
    private biblioteca: Biblioteca;

    constructor() {
        this.biblioteca = new Biblioteca();
        this.llenarLibros();
    }

    getLibros(): Libro[] {
        return this.biblioteca.libros;
    }

    getByTitulo(titulo: string): Libro | undefined {
        return this.biblioteca.buscarLibro(titulo);
    }

    private llenarLibros(): void {
        this.biblioteca.agregarLibro(new Libro(1, 'Historia del Tiempo', 'Stephen Hawking'));
        this.biblioteca.agregarLibro(new Libro(2, 'El Universo en una cascara de nuez', 'Stephen Hawking'));
        this.biblioteca.agregarLibro(new Libro(3, 'Cosmos', 'Carl Sagan'));
    }

}