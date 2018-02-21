const Webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dotenv = require('dotenv');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

dotenv.config();

const isInDev = process.env.NODE_ENV !== 'production';

const plugins = [
  new Webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: ({ resource }) => /node_modules/.test(resource),
  }),
  new ExtractTextPlugin({
    filename: '[name].bundle.css',
  }),
  new Webpack.DefinePlugin({
    __DEV__: isInDev,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ENABLE_UPLOAD: JSON.stringify(process.env.ENABLE_UPLOAD),
    },
  }),
];
let devtool = false;

if (!isInDev) {
  plugins.push(
    new UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  );
} else {
  devtool = 'inline-sourcemap';
}

module.exports = {
  context: __dirname,
  devtool,
  entry: {
    app: './wwwroot/components/app/appContainer.jsx',
    graphiQl: './wwwroot/components/_config/graphiQl/graphiQl.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot/build/'),
    publicPath: '/build/',
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
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
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
