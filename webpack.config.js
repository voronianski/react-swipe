const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackUMDExternal = require('webpack-umd-external');

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const outputFileName = isProduction ? 'react-swipe.min.js' : 'react-swipe.js';

const config = {
  mode: isProduction ? 'production' : 'development',

  devtool: false,

  target: 'web',

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, './dist'),
    filename: outputFileName,
    library: 'ReactSwipe',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          compress: { warnings: false },
          output: { comments: false }
        }
      })
    ]
  },

  externals: webpackUMDExternal({
    react: 'React',
    'swipe-js-iso': 'Swipe'
  }),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
