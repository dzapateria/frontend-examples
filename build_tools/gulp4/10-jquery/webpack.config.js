const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  //  mode: 'development', // production
    entry: {
        'index': './src/ts/index.ts', // suma se concatenara, index.ts concatenara todos sus imports
        'componente': './src/ts/componente.ts' // este no se concatenará salvo que tenga imports, se creara su propio libre.js y debera ser añadido con script src=
    },
    output: {
        path: path.resolve(__dirname, 'es5/webpack'),
        filename: '[name].js'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ],

            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/ts/**/*.ts']
        })
    ],
   /* externals:{
        jquery: 'jquery'
    }*/
};