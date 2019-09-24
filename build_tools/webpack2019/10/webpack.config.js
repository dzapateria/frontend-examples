const path = require('path');

module.exports = {
  //  mode: 'development', // production
    entry: {
        'main': ['./src/ts/suma.ts', './src/ts/index.ts' ], // suma se concatenara, index.ts concatenara todos sus imports
        'libre': './src/ts/libre.ts' // este no se concatenará salvo que tenga imports, se creara su propio libre.js y debera ser añadido con script src=
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
};