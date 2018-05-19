import { Direccion } from './direccion';
import { CuentaBancaria } from './cuenta'
import { Entidad, enumerable } from './utils';

@Entidad({
    clave: 'CLIENTE'
})
export class Cliente {
    // private static clave = 'CLIENTE';
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

    @enumerable(true)
    public agregarCuenta(cuenta: CuentaBancaria) {
        this.cuenta.push(cuenta);
    }
}

