var webpack = require('webpack')

var env = process.env.NODE_ENV
var config = {
	entry: __dirname + "/src/mathOperation.js",
	output: {
		path: __dirname + "/dist",
		filename: 'arrayOperation.js'
	},
	devtool: "eval-source-map",
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel" }
		]
	}
}

module.exports = config