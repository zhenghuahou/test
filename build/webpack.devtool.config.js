'use strict';
var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var  ZipWebpackPlugin = require('zip-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtendedDefinePlugin = require('./plugins/extended-define-webpack-plugin');
var htmlPlugin = require('./plugins/htmlPlugin').htmlPlugin;
var myplugin = require('./plugins/myplugin.js');
// var CopyWebpackPlugin = require("copy-webpack-plugin");


let webpackConfig =  {
    // watch: false,
    entry: {
        "app":["./src/app.js"],
        "test": './src/pageA.js',
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
        loaders: [
            {
                test: /.js/, 
                exclude: /node_modules/, 
                loaders: ['babel']
                
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css')
                // loaders: ['style', 'css']
            },{
                test: /\.(png|jpg)(\?.+|$)/,
                loader: 'file',
                query: {
                    name: '[name]_[sha512:hash:base64:7].[ext]',
                }
            },/*{
                // test: /\.(png(\?\=a)|jpg(\?\=a))$/,
                test: /\.(png|jpg)(\?.+|$)/,
                loader: `${process.cwd()}/build/plugins/url-loader.js`,
                loader: `${process.cwd()}/build/plugins/url-loader.js`,
                query: {
                    name: '[name]_[sha512:hash:base64:7].[ext]',
                    limit: 10001,
                    outputPath:'urlloader/',
                    publicPath:'http://10.7.248.201:8888/urlloader/'
                }
            }*/
        ]
    },
    // devtool: 'cheap-eval-source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'cheap-source-map',
    // devtool: 'eval',
    devtool: false,

    plugins:[
        new myplugin(),

        //the name of the chunk
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
          }
        }),
        ...htmlPlugin(),
         new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        
        // https://github.com/erikdesjardins/zip-webpack-plugin
        new ZipWebpackPlugin({
            path: '../zip', //relative (to Webpack output path)
            filename: `test.zip`
        }),

    ]
};

module.exports = webpackConfig;


