var gulp = require("gulp");
var webpack = require("webpack");
var chalk = require("chalk");
var util = require('util');
var webpackConfig = require('./webpack.config');

console.log(' util:',util);

gulp.task("default", function(callback) {

    // run webpack
    var  wk = webpack(webpackConfig, function(err, stats) {
        //比下面的console后执行

        //打印全部信息
        // console.log(stats.toString('verbose'));

        console.log(stats.toString({
            children:true,
            chunks: false, // Makes the build much quieter
            colors: true
        }));

        //只打印错误、警告信息
        //  if ( stats &&(stats.hasErrors() || stats.hasWarnings()) ) { 
        //     console.log(chalk.yellow('-------------Webpack编程有错误或者警告-------------:\n ',
        //         stats.compilation.errors.toString() || stats.compilation.warnings.toString()));
        // }else{
        //     console.log(chalk.cyan('-------------------^__^-----webpack编译成功-------------------'));
        // }

        // log(string)

        log(chalk.cyan('-------------------^__^-----webpack编译成功-------------------'));
        
    });

    //先执行 ,wk.watch返回一个函数，wk.run:undefined
    // console.log(" wk:",wk," wk:run:",wk.run," wk.watch:",wk.watch);
    callback();
});