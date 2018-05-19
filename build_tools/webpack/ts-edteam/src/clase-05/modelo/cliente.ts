import { Direccion } from './direccion';
import { CuentaBancaria } from './cuenta'

export class Cliente {
    private codigo: number;
    private nombre: string;
    private direccion: Direccion;
    private cuenta: CuentaBancaria[];

    constructor(codigo: number, nombre: string, direccion: Direccion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cuenta = [];
    }

    public agregarCuenta(cuenta: CuentaBancaria) {
        this.cuenta.push(cuenta);
    }
}

