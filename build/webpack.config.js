'use strict';
var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtendedDefinePlugin = require('./plugins/extended-define-webpack-plugin');
var  htmlPlugin = require('./plugins/htmlPlugin').htmlPlugin;

let webpackConfig =  {
	// watch: false,
    entry: {
        "app":["./src/app.js"],
        "test": './src/pageA.js',
        "pageB": './src/pageB.js',
        "async": './src/async.js'
    },
    output: {
        path: path.resolve(process.cwd(),'dist/'),
        // publicPath:"http://www.github5.com:9999/",
        publicPath:"/",
        filename: "[name].js"
        //[hash:4] 表示截取 [hash] 前四位
        //[hash] 是根据一个 compilation 对象计算得出的哈希值，如果 compilation 对象的信息不变，则 [hash]不变 
        // filename: "[name].[hash].js",
        //[chunkhash] is replaced by the hash of the chunk.
        // filename: "[name].[chunkhash].js"
    },
    module: {
        loaders: [{
              test: /vuxx.src.*?js$/, //匹配 vuxx任意字符src任意字符js,即匹配vuxx/src.js,vuxx/srcXXX.js,vuxx/src/目录下面的js文件
              loader: 'babel?cacheDirectory=true'
            },
            {
            	test: /.js/, 
            	exclude: /node_modules/, 
                // loader: 'monkey-hot!babel'
                // loaders: ['monkey-hot','babel']
            	loaders: ['babel']
            	
        	},
        	{
		        test: /\.[s]?css$/,
                loader: ExtractTextPlugin.extract('style','css!sass')
        		//.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                //ok
                // loader:ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
                //ok
		        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader','sass-loader'),

                //error
                // loader: ExtractTextPlugin.extract('style!css!sass')
		    }
        ]
    },
    // devtool: 'cheap-eval-source-map',
    // devtool: 'cheap-module-source-map',
    devtool: 'cheap-source-map',
    // devtool: 'eval',

    plugins:[
        //the name of the chunk
        new ExtractTextPlugin("[name].css"),

    	// Webpack 1.0
	    // new webpack.optimize.OccurenceOrderPlugin(),
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
      
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            // name: ['app', 'common'],
            // name: ['common', 'app'],
            minChunks: 2
            // chunks: ["pageA", "pageB"],
        }),
        
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          },
          'aa.bb':{
            huazi:JSON.stringify("huazi")
          },
          TWO: '1 + 1',
          DESCRIPTION: JSON.stringify('This Is The Test Text.'),
          SOME_BOOLEAN: true
        }),

        ...htmlPlugin(),
      
    ]
};


module.exports = webpackConfig;


