const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/main-dev.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    watch: true
}