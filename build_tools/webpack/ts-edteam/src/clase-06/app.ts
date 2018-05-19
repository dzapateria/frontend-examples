import { Cliente, Direccion, CajaDeAhorro } from './modelo';
import { analizar } from './modelo/utils';

const direccion01 = new Direccion('Bolivia', 'Cochabamba', 'Av. America');
const cliente01 = new Cliente(1, 'Luis', direccion01);

analizar(Cliente);
for(let propiedad in Cliente.prototype) {
    console.log('[Cliente]', propiedad);
}

const cuenta01 = new CajaDeAhorro(123, 0, 'USD', 0);
cliente01.agregarCuenta(cuenta01);
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();