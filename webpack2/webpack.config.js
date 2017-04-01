/*
var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    app: ['./main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  }
  , module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
      , {
        test: /\.html$/
        , use: ['html-loader']
      }
    ]
  }
}; */
module.exports = require('./webpack.make'){
  BUILD: false,
  TEST: false
})
