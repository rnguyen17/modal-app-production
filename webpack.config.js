const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'index.bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{test: /\.js$/, use: 'babel-loader'},
			{test: /\.(png|jpg|svg)$/, use: ['file-loader?name=assets/img/[name].[ext]', 'image-webpack-loader']},
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	},
	resolve: {
	  modules: [
	  	path.resolve('./src'),
	  	path.resolve('./node_modules')
	  ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}