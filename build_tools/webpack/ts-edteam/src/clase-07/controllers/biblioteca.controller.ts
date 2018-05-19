import { JsonController, Get, Param, QueryParam, Res } from 'routing-controllers';
import { Response } from 'express';
import { Libro } from '../modelo/libro';
import { RepositorioLibros } from './repositorio-libros';

@JsonController()
export class BibliotecaController {

    private repo: RepositorioLibros;

    constructor() {
        this.repo = new RepositorioLibros();
    }

    // GET /libros
    @Get('/libros')
    getLibros() {
        return this.repo.getLibros();
    }

    // GET /libro/historia
    @Get('/libro')
    getLibroPorTitulo(@QueryParam('titulo') titulo: string, @Res() response: Response) {
        // Biblioteca.buscarPorTitulo(titulo)
        console.log('Buscando: ', titulo);
        const encontrado = this.repo.getByTitulo(titulo);
        if(!encontrado) {
            return response.sendStatus(404);
        }

        return encontrado;
    }
}