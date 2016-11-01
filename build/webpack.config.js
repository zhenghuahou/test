var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
	watch: true,
    entry: {
    	"app":["./src/app.js"]
    },
    output: {
        path: path.resolve(process.cwd(),'dist/'),
        publicPath:"/dist",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
            	test: /.js/, 
            	exclude: /node_modules/, 
                // loader: 'monkey-hot!babel'
            	loaders: ['monkey-hot','babel']
            	
        	},
        	{
		        test: /\.scss$/,
        		 //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
		        loader: 'style!css!sass?sourceMap'
		    }
        ]
    },
    devtool: '#source-map',

    plugins:[
    	// Webpack 1.0
	    new webpack.optimize.OccurenceOrderPlugin(),
	    // Webpack 2.0 fixed this mispelling
	    // new webpack.optimize.OccurrenceOrderPlugin(),
	    // new webpack.HotModuleReplacementPlugin(), //这个插件会向生产的代码中注入热更新相关的js代码,所以在 dev-server.js 开启热加载的时候在手动添加这个plugin
	    new webpack.NoErrorsPlugin(),
	    new CleanWebpackPlugin(['dist'] ,{
	        root: process.cwd(),
	        verbose: false,// Write logs to console.
	        dry: false,
	        exclude: ['']
    	}),
    	new CopyWebpackPlugin([
        {

            from:'demo/*.html'
        }
    ]),
    ]
};