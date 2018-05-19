

const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new BrowserSyncPlugin(
            // BrowserSync options
            {files: ["./index.php", "dist/*.js"],
                // browse to http://localhost:3000/ during development
                host: '192.168.1.142',
                port: 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://frontend-examples-tools.test/build_tools/webpack/dev-server/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: true
            }
        )
    ]
}


