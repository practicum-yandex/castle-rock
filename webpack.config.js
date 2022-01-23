const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
	entry: {
		main: "./src/index.tsx",
		sw: "./src/sw.ts"
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "[name].[hash].js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new AssetsPlugin({
			filename: 'assets.json'
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
