## Babel

Se instalaron las dependencias de desarrollo

``` 
npm i -D webpack webpack-cli source-map-loader babel-loader @babel/core @babel/preset-env 
``` 
Puedes instalarlas con **npm install**.

Se creo archivo de configuración de webpack **webpack.config.js**.

``` 
module.exports = {
    module:{
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}
```
Se creo archivo de configuración de Babel **.babelrc**.
``` 
{
  "presets": ["@babel/preset-env"]
}
```

Se ha creado carpeta ./src con archivos js ES6


