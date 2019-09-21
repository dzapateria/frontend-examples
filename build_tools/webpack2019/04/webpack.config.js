const path = require('path');

module.exports = {
    // mode: 'development', // production
    entry: ['./src/js/index.js', './src/js/libre.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" }
            ,
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
};