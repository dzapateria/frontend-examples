import { CuentaBancaria } from './cuenta';

export class CajaDeAhorro extends CuentaBancaria {
    constructor(nombre: number, saldo: number, moneda: string, private interes: number) {
        super(nombre, saldo, moneda); //Cuenta.constructor()
    }

    public aplicarInteres(): void {
        console.log('Aplicando interes: ' + this.interes);
    }
}