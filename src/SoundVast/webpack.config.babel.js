var Webpack = require("webpack");
var Path = require("path");

var dev = process.env.NODE_ENV !== "production";
var plugins = [
    new Webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.bundle.js"
    })
];

if (!dev) {
    plugins.push([
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.optimize.UglifyJsPlugin()
    ]);
}

module.exports = {
    context: __dirname,
    devtool: dev ? "inline-sourcemap" : null,
    entry: {
        app: "./wwwroot/js/app.jsx",
        vendor: [
            "react",
            "react-dom",
            "react-router"
       ]
    },
    output: {
        publicPath: "/wwwroot/build/",
        path: Path.resolve(__dirname, "wwwroot/build/"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins,
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    }
}
