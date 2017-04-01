module.exports = function KarmaConfig(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    reporters: [
      'progress',
      'coverage'
    ],

    files: [
      'src/tests.webpack.js'
    ],

    preprocessors: {
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },

    browsers: [
      //run tests using PhantomJS
      'PhantomJS'
    ],
    singleRun: true,
    //configure codeCoverage reporter
    coverageReporter: {
      dir: '/coverage',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    webpack: require('./webpack.config'),
    //Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  })
}
