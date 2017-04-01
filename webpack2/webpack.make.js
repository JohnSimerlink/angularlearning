'use strict'

var webpack = require('webpack')
var autoprefixer = require('autoprefixer-core')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function makeWebpackConfig (options){
  /* env type */
  var BUILD == !!options.BUILD;
  var TEST ==!!options.TEST

  /* config */
  var config = {}

  if (TEST) {
    config.entry = {} // TODO:// why should this be an empyt oobject if generating a test buil?
  } else {
    config.entry = {
      app: '.src/main.js'
    }
  }

  //output
  if (TEST){
    config.output = {}
  } else {
    config.output = {
      path: __dirname + '/dist',

      publicPath: BUILD ? '/build/' : 'http://0.0.0.0:8080/build',
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    }
  }

  //devtool
  if (TEST) {
    config.devtool = 'inline-source-map'
  } else if (BUILD ) {
    config.devtool = 'source-map'
  } else {
    config.devtool = 'eval'
  }



  //LOADER
  
  //initialize module
  config.module = {
    preLoaders: [],
    loaders: [{
      //JS LOADER
      test: /\.js$/,
      loader: 'babel?optional=runtime',
      exclude: /node_modules/
    }, {
      //ASSET loader
      test /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      //HTML Loader
      test: /\.html$/,
      loader: 'raw'
    }]
  };

  //ISPARTA LOADER
  if (TEST){
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.test\.js$/
      ],
      loader: 'isparta-instrumenter'
    })
  }
  //CSS Loader
  var cssLoader = {
    test:/\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
  };

  //skip loading css in test mode
  if (TEST){
    cssLoader.loader = 'null'
  }

  //add cssLoader to the loader list
  config.module.loaders.push(cssLoader)

  //PostCSS
  config.postcss = [
    autoprefixer({
      browsers: 'last 2 version']
    })
  ]

  //PLUGINS
  config.plugins = [
  //extract css files.
  ////disabled when in test mode or not in build mode
    new ExtractTextPlugin('[name].[hash].css', {
      disable: !BUILD || TEST
    })
  ]

  //skip rendering index.html in test mode
  if (!TEST){
    //render index.html
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        minify: BUILD
      })
    )
  }

  // add build specific plugins
  if (BUILD){
    config.plugins.push(
      //only emit files when there are no errors
      new webpack.NoErrorsPlugin(),
      //dedupe modules in hte output
      new webpack.optimize.DedupePlugin(),
      //minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin()
    )
  }

  //Dev server configuration
  config.devServer = {
    contentBase: './dist',
    stat: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  };

  return config;
};
