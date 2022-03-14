const path = require("path");
const webpack = require("webpack");

module.exports = {
	target: "node",
	entry: "./src/server/index.tsx",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "server.js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	plugins: [
		new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
		new webpack.IgnorePlugin({ resourceRegExp: /^pg-hstore$/ }),
	],
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
};
