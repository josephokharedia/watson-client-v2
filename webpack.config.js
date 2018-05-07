const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'app', 'index'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /.jsx?$/,
				include: [
					path.resolve(__dirname, 'app')
				],
				exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'bower_components')
				],
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},
			{test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
		]
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.css']
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'app', 'index.html')
		}),
		new ExtractTextPlugin('css/[name].css')
	]
};