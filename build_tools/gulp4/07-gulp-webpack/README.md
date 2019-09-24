
## 06 Gulp + concat files
Referencias:
- [Kevin Powell - Gulp v4 - Sass and BrowserSync Setup](https://youtu.be/QgMQeLymAdU) youtube
- https://coder-coder.com/gulp-4-walk-through/
- [Coder Coder - Using Gulp 4 in your workflow for Sass and JS files (Youtube)](https://www.youtube.com/watch?v=-lG0kDeuSJk)

Instaladas dependencias de desarrollo de gulp
``` 
npm i browser-sync gulp gulp-sass gulp-sourcemaps gulp-postcss autoprefixer gulp-concat -D
```
Instaladas depenencias de desarrollo de webpack
``` 
npm i source-map-loader ts-loader typescript webpack webpack-cli -D
```
Para mantener versiones del proyecto usa 
``` 
npm install
```

Instala globalmente
``` 
npm i gulp-cli -g
```
Crea archivo de configuración ***gulpfile.js***

### Webpack para TypeScript y Modulos

- Carpeta **.'/src'** de fuente origen
- Archivo de configuración de TypeScript **tsconfig.json**
- Archivo configuracion de Webpack **webpack.config.js**


### EJECUCIÓN DOBLE
Ejecuta en una terminal gulp
 
```
gulp watch
```
Y en otra terminal ejecuta Webpack

``` 
npm run webpack-dev
```