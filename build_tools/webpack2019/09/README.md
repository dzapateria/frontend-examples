
Se instalaron las dependencias

``` 
npm i source-map-loader ts-loader typescript webpack webpack-cli webpack-dev-server -D
```
Añadimos el comando CLI de webpack-dev-server para ejecutarlo con npm run:

``` 
  "scripts": {
    "dev": "webpack --mode development -w",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
  },
```
Añadimos al webpack.config.js

``` 
    devServer:{
        contentBase: './',
        hot: true
    },
```