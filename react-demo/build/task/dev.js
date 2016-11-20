var gulp = require("gulp");
var webpack = require("webpack");
var chalk = require("chalk");
var webpackConfig = require('../webpack.config');
import log from '../util';


function runWebpack(){
console.log(" runWebpack----->",arguments);
   webpack(webpackConfig, function(err, stats) {

        console.log(stats.toString({
            children:true,
            chunks: false, // Makes the build much quieter
            colors: true
        }));


        log(chalk.cyan('-------------------^__^-----webpack编译成功-------------------'));

        
    });
}

runWebpack();

// gulp.task("default", function(callback) {
//     console.log(" callback----->",callback);

//     // run webpack
//     webpack(webpackConfig, function(err, stats) {

//         console.log(stats.toString({
//             children:true,
//             chunks: false, // Makes the build much quieter
//             colors: true
//         }));

//         log(chalk.cyan('-------------------^__^-----webpack编译成功-------------------'));

        
//     });

//     callback();
// });