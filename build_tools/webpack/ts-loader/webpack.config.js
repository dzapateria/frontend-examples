module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/js/app.ts",
    output: {
        filename: 'app.js',
        path: __dirname + './dist/js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    devServer: {
        port: 8000
    }
};