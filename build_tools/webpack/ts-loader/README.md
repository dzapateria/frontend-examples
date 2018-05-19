# Webpack Typescript ts-loader

1) Iniciamos proyecto npm-node 
    ```  
    npm init -y
    ```
2) Instalamos typescript y webpack como dependencia
    ```  
    npm i typescript
    ```
3) Creamos archivo de configuración de TS
    ```  
    tsc --init
    ```
    Y lo modificamos para que las siguientes opciones esten descomentadas y asi:
    
    ``` 
    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "allowJs": true,  
        "sourceMap": true,
        "outDir": "dist/js/"
      },
       "include": [
           "src/**/*.ts"
       ],
      "exclude": [
          "node_modules",
          "**/*.test.ts"
        ]
    }
    ```
    
4) Instalamos webpack, su cli y un par de modulos como dependencias de desarrollo
    ``` 
    npm i webpack webpack-cli ts-loader webpack-dev-server -D
    ```
5) Creamos el archivo de configuración `webpack.config.js` y pegamos
el contenido de ejemplo de [github.com/TypeStrong/ts-loader](https://github.com/TypeStrong/ts-loader).

    ```
    module.exports = {
      mode: "development",
      devtool: "inline-source-map",
      entry: "./src/app.ts",
      output: {
        filename: "salida.js"
      },
      resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      }
    };
    ```
    
    ## REFERENCIAS
    
    http://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html#webpack
    