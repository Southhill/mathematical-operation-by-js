var webpack = require('webpack')

var env = process.env.NODE_ENV
var webpackConfig = {
    entry: __dirname + "src/baseOperation.js",
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
