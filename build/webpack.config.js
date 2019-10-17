const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "main.js"
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'] // 代表 import 引入文件 不需要写相关文件后缀名
	},
	module: {
		rules: [{
			test: /\.tsx?$/, // 正则 ? 代表0或1，匹配 .ts或.tsx
			use: 'ts-loader',
			exclude: /node_modules/ // 排除，不处理
		}]
	},
	devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
	devServer: {
		contentBase: './dist',  // 开发运行模式根路径
		stats: 'errors-only', // 控制台只打印错误信息
		compress: false,
		host: 'localhost',
		port: 8089
	},
	plugins: [
		new CleanWebpackPlugin(), // 默认会清理dist
		new HtmlWebpackPlugin({
			template: './src/template/index.html'
		})
	]
}