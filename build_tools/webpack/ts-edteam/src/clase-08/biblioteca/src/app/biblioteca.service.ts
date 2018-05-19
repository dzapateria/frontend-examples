import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './modelo/libro';

@Injectable()
export class BibliotecaService {

  constructor(private http: HttpClient) { }

  getLibros(): Promise<Libro[]> {
    return this.http.get<Libro[]>('http://localhost:3000/libros').toPromise();
  }

  busquedaPorTitulo(titulo: string): Promise<Libro | undefined> {
    return this.http.get<Libro>(`http://localhost:3000/libro?titulo=${titulo}`).toPromise();
  }
}
