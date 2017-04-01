'use strict';

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function makeWebpackConfig() {
  var config = {
    entry: {
      app: './src/app/app.js'
    },
    output: {
      publicPath: 'https://simer.link:8080/'
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        inject: 'body'
      })
    ],
    devServer: {
      contentBase: './src/public'
    }
  }

  return config;
}();
