const Webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new Webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
  }),
  new ExtractTextPlugin({
    filename: '[name].bundle.css',
  }),
];
let devtool = null;

if (!dev) {
  plugins.push([
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin(),
  ]);
} else {
  devtool = 'inline-sourcemap';
}

module.exports = {
  context: __dirname,
  devtool,
  entry: {
    app: './wwwroot/components/app/app.jsx',
    graphiQl: './wwwroot/components/_config/graphiQl/graphiQl.jsx',
    vendor: [
      'react',
      'react-dom',
      'found',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot/build/'),
    publicPath: '/wwwroot/build/',
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
        include: /node_modules/,
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
        exclude: /node_modules/,
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
        loader: 'svg-react-loader',
        query: {
          classIdPrefix: '[name]-[hash:8]__',
        },
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      // https://github.com/chromakode/react-html-email/issues/30
      'react/lib/DOMProperty': 'react-dom/lib/DOMProperty',
    },
  },
};
