var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'browser', 'js');
var JS_DIR = path.resolve(__dirname, 'src', 'js');

var config = {
  entry: JS_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.min.js'
  },
  module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : JS_DIR,
          loader : 'babel'
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        }
      ]
  }
};

module.exports = config;
