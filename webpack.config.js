const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"react-dom": "@hot-loader/react-dom",
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
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
				test: /\.mp3$/,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		port: 5000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "src/static",
					to: "static",
				},
			],
		}),
	],
};
