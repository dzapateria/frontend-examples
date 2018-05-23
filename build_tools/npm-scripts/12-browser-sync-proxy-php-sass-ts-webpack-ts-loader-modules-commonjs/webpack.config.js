const path = require('path');


module.exports = {
    //mode: "development",
    mode: "production",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, "src/ts/main.ts"),
    output: {
        filename: 'app.js',
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