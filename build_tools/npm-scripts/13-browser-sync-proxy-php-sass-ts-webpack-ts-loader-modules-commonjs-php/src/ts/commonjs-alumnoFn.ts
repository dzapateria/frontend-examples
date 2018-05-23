function alumnoSaluda(name: string) {

    $('body').append(`
        <hr>
        <h3>COMMONJS: Función exportada commonjs-alumnoFn: ${name} </h3>
    `);
}

export = alumnoSaluda;


