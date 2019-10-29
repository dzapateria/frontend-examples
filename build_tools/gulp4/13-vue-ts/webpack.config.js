const path = require('path');
//const TSLintPlugin = require('tslint-webpack-plugin');
module.exports = {
   entry: ['./src/ts/index.ts','./src/ts/componente.ts','./src/ts/need_lodash.ts'],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'webpack-bundle.js'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    watchOptions: {ignored: /node_modules/},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        // new TSLintPlugin({
        //     files: ['./src/ts/**/*.ts']
        // })
    ]
};