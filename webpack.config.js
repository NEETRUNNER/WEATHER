'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/js') // изменено на src/js
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
