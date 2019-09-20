# Typescript con Webpack, ts-loader y @types

## OBJETIVOS

Instalación y uso de dependencias a través de typescript modulos con ayuda de Webpack

## Globalmente deberias tener instalado

```bash
npm -g browser-sync rimraf
```

## Necesitamos las dependencias siguientes:

```bash
npm i -D browser-sync node-sass npm-run-all rimraf typescript watch webpack webpack-cli ts-loader
```

## package.json

Después de ejecutar el comando:

  ```json
 {
  "name": "npm-scripts-build-typescript",
  "version": "1.0.0",
  "description": "",
  "main": index.ts,
  "scripts": {
    "server": "browser-sync start --config bs-config.js",
    "clean": "rimraf dist/js/*",
    "watch:js": "watch \"webpack\" ./src/ts/",
    "watch:css": "watch \"node-sass src/scss -o dist/css\" ./src/scss/",
    "start": "run-p server watch:css watch:js"
  },
  "keywords": [],
  "author": "dzapateria <dzapateria@gmail.com>",
  "license": "ISC",
  "devDependencies": {
    "browser-sync": "^2.24.4",
    "node-sass": "^4.9.0",
    "npm-run-all": "^4.1.3",
    "rimraf": "^2.6.2",
    "ts-loader": "^4.3.0",
    "typescript": "^2.8.3",
    "watch": "^1.0.2",
    "webpack": "^4.8.3",
    "webpack-cli": "^2.1.3"
  },
  "dependencies": {}
}
  ```

## tsconfig.json generar uno

Necesitamos un un archivo de configuración de Typescript escribiendo:

```bash
tsc --init
```

## tsconfig.json

El archivo tsconfig lo dejamos asi:

```json
  {
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "sourceMap": true,
    "rootDir": "./src/ts/"
  },
  "exclude": [
    "node_modules"
  ]
}
```

## webpack.config.js

El archivo de configuración de Webpack asi:

```js
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, "src/ts/main.ts"),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, "dist/js")
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};
```

## Instalamos las librerias

Las definiciones de desarrollo

```bash
npm i -D @types/jquery @types/lodash @types/jqueryui @types/vue-resource @types/swiper @types/bootstrap @types/isotope-layout @types/datatables.net @types/moment-timezone @types/dropzone 
```

## MÉTODO 1 - <script> tag

Añadimos las librerías a través de scripts tag en el index

## MÉTODO 2 - main.js

En nuestro archivo principal podemos ahora importar modulos de forma como lo hace node.

INCONVENIENTE: Pesa mucho el archivo final compilado, y dificulta el seleccionar librerias 
diferentes a cargar en páginas. Tal vez podria empaquetarse un vendor.js

```js
import $ = require("jquery");
```

## BOOTSTRAP 4 MODULAR SASS

```bash
npm install bootstrap

```

## REFERENCIAS

- https://appdividend.com/2018/03/18/how-to-setup-typescript-with-webpack-4/