const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'main': ['./src/index.js', './src/modulo.js'], // concatenara los imports respendando arbol de dependencias por separado y finalmente concatenará.
        'libre': './src/libreria.js' // este no se concatenará salvo que tenga imports, se creara su propio libre.js y debera ser añadido con script src=
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module:{
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.js$/, exclude: /node_modules/, use: "source-map-loader", enforce: "pre"},
            { test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}