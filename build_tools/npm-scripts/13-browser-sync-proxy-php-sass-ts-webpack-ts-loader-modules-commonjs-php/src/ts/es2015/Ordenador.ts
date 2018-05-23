import { Producto } from './Producto';

export class Ordenador extends Producto {

    constructor(modelo: string, pvp: number, public pantalla: number) {
        super(modelo, pvp);
        this.pantalla = pantalla;
    }

}

