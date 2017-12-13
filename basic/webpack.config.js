/**
 * Author: daint2@fsoft.com.vn
 * File: webpack.config.js
 */

const PATH = require('path');
const SRC_DIR = PATH.resolve(__dirname, 'src');
const PUBLIC_DIR = PATH.resolve(__dirname, 'public');

module.exports = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: PUBLIC_DIR + '/build',
    publicPath: '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      componentsPath: SRC_DIR + '/components'
    }
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 9999,
    historyApiFallback: true
  }
}