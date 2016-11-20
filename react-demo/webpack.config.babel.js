/*
用热加载并不会，并不会生成dist,所生成的js文件在内存中
*/
import path from 'path';
import webpack from 'webpack'

import provide from './build/config/provide.js';
console.log('provide:',provide);
//provide: { React: 'react', ReactDOM: 'react-dom' }

// import {provide} from './build/config/provide.js';
 // console.log('provide:',provide);
//provide: undefined

// import {provide} from './build/config';
// console.log('provide:',provide); //Cannot find module './build/config'


module.exports = {
	// context: __dirname, //不加这行的话,这个./是相对根目录，即是test文件夹
	context: __dirname, //加这行的话,这个./是相webpack配置文件所在的js文件目录
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
    	'webpack/hot/only-dev-server',
    	'./src/main.js'],
	output: {
        path: './dist',
        publicPath:"/",
        //publicPath:"/dist", //如果这儿加了/dist,那么react-demo/index.html 里面引入main.bundle.js的路径
        //也要有原来的'/main.bundle.js'改成'/dist/main.bundle.js'
        filename: "[name].bundle.js"
    },
	module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
        	{
		        test: /\.[ls]?css$/,
        		 //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
		        loader: 'style!css!sass?sourceMap'
		    }
        ]
    },
    
    devServer: {
        contentBase: 'react-demo' , //本地服务器所加载的页面所在的目录,加上这一行访问途径为http://localhost:8080/assets/index.html
        //不加这一行的话访问html的路径为http://localhost:8080/react-demo/assets/index.html
        port: 8080,
        hot: true,
        noInfo:true,
  		clientLogLevel:'none',
        colors: true,  //终端中输出结果为彩色
        // process: true,//显示合并代码进度 
        // historyApiFallback: true,  //不跳转
    },

	plugins: [
	 	new webpack.ProvidePlugin(provide),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
}