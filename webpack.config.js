var webpack = require('webpack')

var env = process.env.NODE_ENV
var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/lib",
        filename: 'index.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
				loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("Copyright Cao."),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
if (env !== 'production') {
    webpackConfig.devtool = 'eval-source-map';
}

module.exports = webpackConfig
