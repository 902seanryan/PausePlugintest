const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    frame: './src/frame.js'
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};