const path = require("path");
const weback = require("webpack");

module.exports = {
	entry:"./src/app.js",
	mode:"development",
	module: {
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {presets: ["@babel/env"]}
			}, 
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {extensions: ["*", ".js", ".jsx"]},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filesname: "bundle.js"
	},
	plugins: [new webpack.hotModuleReplacementPlugin()]
};