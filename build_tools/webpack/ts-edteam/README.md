# TypeScript desde Cero
Mira el desarrollo del proyecto **desde cero** en el curso: [ed.team/typescript](https://ed.team/typescript).

## Entorno de desarrollo
Las siguientes herramientas son necesarias:

* Git
* Node.js
* Visual Studio Code

## Clonar el Repositorio

```
git clone https://github.com/luixaviles/edteam-typescript.git
cd edteam-typescript
```

## Instala dependencias
```
npm install
```

# Ejecutando la aplicación localmente
El presente proyecto tiene las configuraciones necesarias para poder correr los scripts resultantes(archivos `js`) desde el browser o bien usando el motor JavaScript de Node.

## `tsconfig.json`

* Permite redireccionar la _salida_ a un directorio específico. En nuestro caso, usaremos la carpeta `dist`.
* Especifica la versión de _salida_ para el código JavaScript. En este caso, usamos `es5` ya que esta especificación es soportada por prácticamente todos los motores JavaScript de la actualidad. Ver [este link](http://kangax.github.io/compat-table/es5/) para mayor referencia.
* También es posible especificar que archivos se toman en cuenta o no para el proceso de compilación. Vea las propiedades `files`, `include` y `exclude` en la [documentación](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## `webpack.config.js`

En nuestro caso, este archivo establece configuraciones básicas para poder cargar dinámicamente, desde el browser, el resultado de nuestro código TypeScript. 

* `entry`: Especifica el archivo de _entrada_ para el proceso.
* `output`: Especifica la salida para el archivo anterior.
* `module.rules`: En esta sección especificamos el _loader_ que usaremos para nuestro proyecto TypeScript, vía `webpack`: [ts-loader](https://github.com/TypeStrong/ts-loader).
* `devServer.port`: Especificamos el puerto que usaremos para nuestra aplicación cliente. 

## Probando scripts desde el browser
Ejecuta el siguiente comando desde una terminal:

```
npm run dev
```

* Observa la salida del comando anterior.
* Abre tu navegador preferido(en nuestro caso Google Chrome).
* Abre la consola del browser para ver la salida de nuestros scripts.
* Carga la siguiente URL: [http://localhost:8000](http://localhost:8000).
* Observa la salida en la consola del browser.
* Aplica cambios en el archivo `src/app.ts`.
* Objserva nuevamente la salida en la terminal y en la consola del browser. Verás que nuestros cambios se recargan de manera automática :-)

## Prueba tus scripts usando Node.js

Ejecuta el siguiente comando desde una terminal:

```
tsc
```

* Verifica que la salida del comando sea limpia, no deben existir errores.
* Verifica los archivos generados en el directorio `dist`
* Ejecuta el script de tu preferencia usando el comando `node`. Por ejemplo:

```
node dist/main.js
```

* Observa la salida en la terminal.
