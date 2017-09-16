/* eslint-disable no-var */

var Webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

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
    app: './wwwroot/components/app/component.jsx',
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
          fs.realpathSync(`${__dirname}/node_modules/react-jplayer`),
          fs.realpathSync(`${__dirname}/node_modules/react-jplaylist`),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        include: [
          fs.realpathSync(`${__dirname}/node_modules/react-jplayer`),
          fs.realpathSync(`${__dirname}/node_modules/react-jplaylist`),
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          }, {
            loader: 'less-loader',
          }],
        }),
      },
      {
        test: /\.(css|less)$/,
        exclude: [
          fs.realpathSync(`${__dirname}/node_modules/react-jplayer`),
          fs.realpathSync(`${__dirname}/node_modules/react-jplaylist`),
        ],
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
              config: {
                path: './postcss.config.js',
              },
            },
          }, {
            loader: 'less-loader',
          }],
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
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
