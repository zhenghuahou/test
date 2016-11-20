var gulp = require("gulp");
var webpack = require("webpack");
var chalk = require("chalk");
var util = require('util');
var webpackConfig = require('./webpack.config');


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return time;
}

// log is just a thin wrapper to console.log that prepends a timestamp
var log = function() {
    var arr = [];
    console.log('[%s]:%s ', chalk.cyan(timestamp()),arr.join.call(arguments,' '));
};


gulp.task("default", function(callback) {
    // console.log(" callback----->",callback);

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