var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname),
  devtool: "source-map",
  entry: {
        app: "./src/index.js"
    },
  output: {
    path: path.join(__dirname) + "/assets",
    filename: "index.js"
  },
  module: {
      loaders: [{
          test: /\.js?$/,
          loader: "babel",
          query: {
            presets: ["react", "es2015"]
          },
          include: path.join(__dirname) + "/src"
      }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    })
  ]
}
