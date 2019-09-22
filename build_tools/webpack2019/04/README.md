## EJEMPLO BÁSICO 4 - ES2015+ CON BABEL

Se han instalado las dependencias para Babel
``` 
npm i -D babel-loader @babel/core @babel/preset-env
```
Se ha creado un archivo de configuración del transpilador Babel llamado **.babelrc**.
con el contenido:

``` 
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
Instala dependencias si no estan
``` 
npm install
```
## Recomendaciones

Para la compilación SCSS así como recarga del navegador
usaré prepros. Webpack será la herramienta para poder modular y/o compilar TypeScript o ESx a ES5.

## Modo sin webpack.config.js
Es posible también compilar sin archivo de configuración así, recuerda que esto sera valido para compilar
los archivos en ./src/index.js y dara como salida a dist/main.js si quieres otra estructura de carpetas tendras que especificar entrada y salida con --output.
``` 
webpack --module-bind js=babel-loader
```

### INICIO
Escribe en la terminal para desarrollar



Arranca en modo desarrollo:
``` 
npm run dev
```
Modo producción 
``` 
npm run build
```