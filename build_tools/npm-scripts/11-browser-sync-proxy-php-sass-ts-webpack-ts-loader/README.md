# WEBPACK TS-LOADER

## OBJETIVOS

Dar una salida a un archivo app.js ya que el compilador de tsc no es eficiente para esto.

## Necesitamos las dependencias siguientes:

```bash
npm i webpack-cli webpack ts-loader -D
```

## package.json

Después de ejecutar el comando:

  ```json
  "devDependencies": {
      "browser-sync": "latest",
      "rimraf": "latest",
      "npm-run-all": "latest",
      "watch": "latest",
      "typescript": "latest"
    }
  ```

## tsconfig.json

Necesitamos un un archivo de configuración de Typescript escribiendo:

```bash
tsc --init
```

El archivo tsconfig lo dejamos asi:

    ```json
    {
      "compilerOptions": {
       "target": "es5",
        "sourceMap": true, 
        "outDir": "./dist/js",
        "rootDir": "./src/js", 
        "esModuleInterop": true 

      },
      "include": [
        "./src/**/*.ts"
      ],
      "exclude": [
        "src/test.ts"
      ]
    }
    ```
## webpack.config.js

El archivo de configuración de Webpack asi:



## REFERENCIAS

- https://appdividend.com/2018/03/18/how-to-setup-typescript-with-webpack-4/