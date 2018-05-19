module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/clase-03/app-2.ts",
    output: {
      filename: 'app.js',
      path: __dirname + './dist'
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