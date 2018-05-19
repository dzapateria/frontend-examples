
### browser-sync-webpack-plugin-basic

- Iniciamos archivo gestor de dependencias package.json
    ``` 
    npm init -y
    ```
- Instalamos 
    ``` 
    npm install webpack webpack-cli browser-sync browser-sync-webpack-plugin -D
    ```
- BrowserSync arrancara cuando arranques webpack en modo watch
    ``` 
    webpack --watch
    ```
 If you're not using Webpack Dev Server, you can make BrowserSync to serve your project. 
 The setup is pretty easy: just pass the BrowserSync options to the plugin as the first argument.   
 
Crea tu `webpack.config.js`:
    
``` 
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ]
}
```

