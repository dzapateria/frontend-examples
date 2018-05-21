const path = require('path');


module.exports = {
    mode: "development",
    //mode: "production",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, "src/ts/main.ts"),
    entry: {
        app: path.resolve(__dirname, "src/ts/main.ts"),
        galeria: path.resolve(__dirname, "src/ts/galeria.ts"),
        es2015: path.resolve(__dirname, "src/ts/es2015.ts")
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist/js")
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};