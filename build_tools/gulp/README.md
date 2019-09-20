
## GULP

- Creamos un proyecto nuevo npm con archivos de dependencias en el package.json:
    ```
    npm init -y
    ```
- Instalamos gulp y browser-sync globalmente y como dependencia
    ```
    npm i -g gulp gulp-cli browser-sync
    npm i -D gulp gulp-cli browser-sync
    ```
- Creamos un archivo de configuración `gulpfile.js`

- Creando una estructura básica de proyecto.
    ```
    index.html
    dist/
       js/
         |__ index.ts
       css/
         |__ index.css
  ```
- incluye en el index.html algun contenido y enlazalo al css de dist.

## REFERENCIAS

https://browsersync.io/docs/gulp
https://browsersync.io/docs/gulp#gulp-install

https://fettblog.eu/php-browsersync-grunt-gulp/
https://phpocean.com/tutorials/front-end/automate-your-workflow-with-gulp-part-3-live-reloading/23
https://github.com/ahmadawais/WPGulp

https://www.npmjs.com/package/gulp-hash-filename
 https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development   