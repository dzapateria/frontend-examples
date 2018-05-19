const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/main.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new BrowserSyncPlugin(
            {
            host: 'localhost',
            port: 3000,
            server: true
            }
        )
    ]
}