var miModuloRevelador = (function () {
    var nombre = "Juan Ramos",
        saludo = "Hola !";

    // Función privada
    function imprimirNombre() {
        console.log("Nombre:" + nombre);
    }

    // Función pública
    function asignarNombre(nuevoNombre) {
        nombre = nuevoNombre;
    }

     // Función pública
     function mostrar() {
        console.log("Nombre:" + nombre);

    }

    // Revelar accesos públicos (opcionalmente con otros nombres)
    return {
        setName: asignarNombre,
        greeting: saludo
    };
})();

miModuloRevelador.setName("Carlos");