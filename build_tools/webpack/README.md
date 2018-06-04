## WEBPACK 4 (2018)

Webpack hace cosas muy interesantes para el desarrollo web, algunas a destacar son:

- Carga de modulos Js de manera más avanzada que la competencia.
- Puede ser interesante usarla únicamente para JavaScript.


## Requerimientos
- Tener node-npm instalado.
- Crear un proyecto node para gestionar las dependencias en su package.json.
    ```
    npm init -y
    ```
- Instalar Webpack globalmente.
    ```
    npm i webpack -g
    npm install -g webpack-cli
    ``` 
- Instalar Webpack como dependencia de desarrollo y su cli.
    ```
    npm i -D webpack 
    npm i -D webpack-cli
    
    ## --- Dev Server -- ##
    npm i -D browser-sync
    npm i -D webpack-dev-server
    npm i -D browser-sync-webpack-plugin
    
    ## --- FILES -- ##
    npm i -D file-loader
    npm i -D url-loader
    npm i -D copy-webpack-plugin
    npm i -D clean-webpack-plugin
    
    ### --- HTML  --- ###
    npm install -D html-webpack-plugin
    
    ### --- CSS -- ##
    npm install -D style-loader
    npm install -D css-loader
    npm install -D extract-text-webpack-plugin
    
    ## -- SASS -- ##
    npm i -D node-sass
    npm i -D sass-loader
    
    ## -- JavaScript -- ##
     npm i -D babel-core
     npm i -D babel-loader
     npm i -D babel-preset-es2015
     npm i -D eslint
     npm i -D eslint-loader
    
    ## -- TypeScript -- ##
    
    ## -- Handlebars -- ##
    npm i -D handlebars
    npm i -D handlebars-loader
    
    ```
- Estructura básica de carpetas podria ser.
    - Desarrollo: src/js, src/css y Producción: dist/css, dist/js

- Puedes arrancar la versión instalada localmente con:
node_modules/.

## REFERENCIAS
- <https://github.com/Lemoncode/webpack-by-sample>
- Documentación oficial webpack 
https://webpack.js.org 
- Stackoverflow
https://stackoverflow.com/questions/tagged/webpack
- Curso Webpack 4 Udemy (En inglés)
- Curso Webpack devcode
- statickidz/webpack-handlebars-bootstrap

