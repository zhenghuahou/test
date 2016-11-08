var webpack = require("webpack");
var path = require("path");
// var CleanWebpackPlugin = require("clean-webpack-plugin");

var cwd = process.cwd();

console.log(__dirname," ______________cwd_______________:",cwd,"path:", path.resolve(__dirname, "build"));

module.exports = {
	context: __dirname,
    entry: {
        // "main":['webpack-dev-server/client?http://localhost:8888/index.html',path.resolve(__dirname, "src/main.js")]
        "main":["./src/main.js"]
        // "main":['webpack-dev-server/client?http://localhost:8080/', "./react-demo/src/main.js"]
    },
    output: {
        path: './dist',
        publicPath:"/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?' + JSON.stringify({
                        compact: false
                })
            },
        	{
		        test: /\.scss$/,
        		 //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
		        loader: 'style!css!sass?sourceMap'
		    }
        ]
    },
    devtool: '#source-map',

    devServer: {
        // contentBase: ['react-demo'] , //本地服务器所加载的页面所在的目录
        port: 8080,
        colors: true,  //终端中输出结果为彩色
        // historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    plugins:[
    	// Webpack 1.0
	    new webpack.optimize.OccurenceOrderPlugin(),
	    // Webpack 2.0 fixed this mispelling
	    // new webpack.optimize.OccurrenceOrderPlugin(),
	    // new webpack.HotModuleReplacementPlugin(), //这个插件会向生产的代码中注入热更新相关的js代码,所以在 dev-server.js 开启热加载的时候在手动添加这个plugin
	    new webpack.NoErrorsPlugin(),
    ]
};