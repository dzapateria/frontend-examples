import { CuentaBancaria } from './cuenta';
import { random } from 'lodash';

export class CajaDeAhorro extends CuentaBancaria {
    constructor(nombre: number, saldo: number, moneda: string, private interes: number) {
        super(nombre, saldo, moneda); //Cuenta.constructor()
    }

    public aplicarInteres(): void {
        this.interes = random(1, 20);
        console.log('Aplicando interes: ' + this.interes);
    }
}