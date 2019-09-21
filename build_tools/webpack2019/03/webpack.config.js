const path = require('path');

module.exports = {
   // mode: 'development', // production
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: "source-map", // enum
};