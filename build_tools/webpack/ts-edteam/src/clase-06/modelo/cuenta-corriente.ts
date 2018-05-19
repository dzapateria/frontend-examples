import { CuentaBancaria } from './cuenta';

export class CuentaCorriente extends CuentaBancaria {
    constructor(numero: number, saldo: number, moneda: string) {
        super(numero, saldo, moneda);
    }
}