
# WEBPACK DESDE webpack.config.js

- Iniciamos proyecto npm package.json dependencias
    ``` 
    npm init -y
    ```
- Instalamos dependencias
    ``` 
    npm install webpack webpack-cli -D
    ```
- Creamos un index.html y un index.js con algo de código, en el index.html apunta
a el nombre de salida de tu js. Ejemplo si tu entra es main.js y tu salida es app.js.

    ``` 
    <script src="app.js"></script>
    ```
- Tenemos dos formas de ejecutar webpack localmente sin instalar una versión global.
Una es llamar a webpack local espedificando la ruta del binario ejemplo:
    ``` 
    node_modules/.bin/webpack main.js -o app.js 
    ```

* La otra opción mas recomendable es llamar este coando dentro del objeto script del package.json 
ya que toman la instalación local por defecto y nos ahorramos escribir la ruta local.

    ``` 
    "scripts": {
        "webpack": "webpack main.js -o app.js"
      },
    ```
    Y para ejecutar este scripts-comandos, como le pusimos de nombre webpack, escribimos:
    
    ``` 
    npm run webpack
    ```
