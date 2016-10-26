var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        app: "./wwwroot/js/store.js",
        vendor: ["react", "react-dom", "react-router", "./wwwroot/js/polyfill.js"]
    },
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: "babel-loader",
              query: {
                  presets: ["react", "es2015", "stage-0"],
                  plugins: ["transform-class-properties", "transform-decorators-legacy"]
              }
          }
        ]
    },
    output: {
        path: "./wwwroot/build/",
        filename: "[name].bundle.js"
    },
    plugins: debug ?
    [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ] :
    [
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};