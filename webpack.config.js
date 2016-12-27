var path = require('path')
var webpack = require('webpack')



var env = process.env.NODE_ENV
var SRC_PATH = path.resolve(__dirname, 'src')
var TEST_PATH = path.resolve(__dirname, 'test')
var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/lib",
        filename: '[name].js'
    },
    devtool: "inline-source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
				loader: "babel",
                exclude: /node_modules/
            }
        ]
    }
}


module.exports = webpackConfig
