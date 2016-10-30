var gulp = require("gulp");
var webpack = require("webpack");
var chalk = require("chalk");
var webpackConfig = require('./webpack.config');


gulp.task("default", function(callback) {
    // console.log(" callback--->",callback);
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        // console.log(" err:",err," stats:",stats);
         if ( stats &&(stats.hasErrors() || stats.hasWarnings()) ) { 

            console.log(chalk.yellow('-------------Webpack编程有错误或者警告-------------:\n ',
                stats.compilation.errors.toString() || stats.compilation.warnings.toString()));
        }else{
            console.log(chalk.cyan('-------------------^__^-----dev编译成功-------------------'));
        }
    });
});