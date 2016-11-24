var webpack = require('webpack');

module.exports = {
	entry: __dirname + "src/mathOperation.js",
	output: {
		path: __dirname + "build/",
		filename: 'arrayOperation.js'
	},
	devtool: "eval-source-map",
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" },
			{ test: /\.js$/, exclude: node_modules, loader: "babel" }
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	}
}