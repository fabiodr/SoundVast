var Webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var dev = process.env.NODE_ENV !== 'production';
var plugins = [
  new Webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
  }),
  new ExtractTextPlugin('[name].bundle.css'),
];

if (!dev) {
  plugins.push([
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin(),
  ]);
}

module.exports = {
  context: __dirname,
  devtool: dev ? 'inline-sourcemap' : null,
  entry: {
    app: './wwwroot/components/app/app.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router',
    ],
  },
  output: {
    publicPath: '/wwwroot/build/',
    path: path.resolve(__dirname, 'wwwroot/build/'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'wwwroot/components'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: () => [autoprefixer],
            },
          }, {
            loader: 'less-loader',
          }],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
