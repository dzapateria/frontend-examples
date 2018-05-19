// Crear las Instancias
// import { Cliente } from './modelo/cliente';
// import { CuentaBancaria } from './modelo/cuenta';
// import { CajaDeAhorro } from './modelo/caja-ahorro';
// import { Direccion } from './modelo/direccion';
// import { CuentaCorriente } from './modelo/cuenta-corriente';

import { 
    CajaDeAhorro, 
    Cliente, 
    CuentaBancaria, 
    CuentaCorriente, 
    Direccion} from './modelo';


const direccion01 = new Direccion('Bolivia', 'Cochabamba', 'Av. America');

const cliente01 = new Cliente(1, 'Luis Aviles', direccion01);
let cuenta01: CuentaBancaria;
cuenta01 = new CajaDeAhorro(100, 0, 'USD', 10);

const cuenta02 = new CuentaCorriente(200, 0, 'USD');
// Usamos la referencia: primera cuenta
cliente01.agregarCuenta(cuenta01);
// Usamos la referencia: segunda cuenta
cliente01.agregarCuenta(cuenta02);

console.log('Cliente, cliente01', cliente01);

