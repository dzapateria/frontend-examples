
### 10 Bootstrap + Gulp/scss/BrowserSync + Webpack/TypeScript
Referencias:
- [Kevin Powell - Gulp v4 - Sass and BrowserSync Setup](https://youtu.be/QgMQeLymAdU) youtube
- https://coder-coder.com/gulp-4-walk-through/
- [Coder Coder - Using Gulp 4 in your workflow for Sass and JS files (Youtube)](https://www.youtube.com/watch?v=-lG0kDeuSJk)
- https://webpack.js.org/configuration/externals/ No veo necesario externals

Instaladas dependencias de desarrollo de gulp
``` 
npm i browser-sync gulp gulp-sass gulp-sourcemaps /
gulp-postcss autoprefixer gulp-concat npm-run-all /
source-map-loader ts-loader typescript webpack webpack-cli /
tslint tslint-webpack-plugin expose-loader gulp-uglify -D
```
Tipos definiciones typescript
``` 
npm i @types/node @types/jquery @types/lodash @types/bootstrap @types/popper.js -D 
```

Dependencias de desarrollo de javascript para bootstrap, además de jquery luego importa la versión 
Boostrap Bundle.min.js que ya incluye pooper



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


### Ejecutar Webpack (ts) Gulp (scss/js)
**MODO DESARROLLO**

``` 
npm start
```
**COMPILAR PARA PRODUCCION**
``` 
npm run build
```