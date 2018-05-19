
// target -> Clase Cliente
export function Entidad(config: any) {
    console.log('[Entidad]config', config);
    return (target: any) => {
        target.clave = config.clave;
        console.log('target', target);
    }
}

// target -> agregarCuenta
export function enumerable(config: boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log('[enumerable]target', target);
        descriptor.enumerable = config;
    }
}

export function analizar(clase: any) {
    console.log('[analizar]', clase.clave);
}