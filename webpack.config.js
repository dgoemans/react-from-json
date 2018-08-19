var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')


var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/index.js',
  devtool: 'cheap-source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new BrowserSyncPlugin({
        host: process.env.IP || 'localhost',
        port: process.env.PORT || 3000,
        server: {
            baseDir: ['./', './build']
        },
        notify: false,
        logLevel: 'debug'
    })
],
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        include : APP_DIR,
        use : ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  watch: true
};

module.exports = config;