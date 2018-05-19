import { Component, OnInit } from '@angular/core';
import { Libro } from './modelo/libro';
import { BibliotecaService } from './biblioteca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  libros: Libro[];
  errorBusqueda: boolean = false;

  // Inyectamos el servicio :-)
  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit() {
    this.cargarLibros();
  }

  private cargarLibros(): void {
    this.bibliotecaService.getLibros()
    .then((resultado) => {
      this.libros = resultado;
    });
  }

  buscarLibro($event): void {
    console.log('$event', $event);
    this.errorBusqueda = false;
    const texto: string = $event.target.value;
    if(texto.trim() === '') {
      this.cargarLibros();
      return;
    }

    this.bibliotecaService.busquedaPorTitulo(texto)
    .then((resultado)=>{
      this.libros = [resultado];
    })
    .catch((error)=> {
      console.log('No encontrado', texto);
      this.errorBusqueda = true;
    })
  }
}
