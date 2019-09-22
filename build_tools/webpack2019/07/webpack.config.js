module.exports = {
    devtool: 'inline-source-map',
    module:{
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.js$/, exclude: /node_modules/, use: ["source-map-loader"], enforce: "pre"}
        ]
    }

}