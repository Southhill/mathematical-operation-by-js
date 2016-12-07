// Karma configuration
// Generated on Thu Nov 24 2016 11:17:31 GMT+0800 (CST)
const webpackConfig = require('./webpack.config')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/index.js'
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
        'test/*.js': ['webpack'],
        'src/*.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
        type: 'html',
        dir: 'coverage'
    },
    port: 9000,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],

    captureTimeout: 60000,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackServer: {
      stats: {
        colors: true
      },
      noInfo: true
    }
  })
}
