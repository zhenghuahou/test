//MyPlugin.js
var gulp = require('gulp');
var runImageMini = require('../../gulpfile');

console.info(' runImageMini:',runImageMini);

function myFunc(callback) {
    // console.warn('打印 gulp-->',gulp);
    if (gulp.tasks.imagemini) { 
        console.info('gulpfile contains task!',+new Date,' callback:',callback);
        //
        runImageMini(callback);
    }
}

function MyPlugin() {
    // console.info("我是myplugin构造函数")
};

MyPlugin.prototype.apply = function (compiler) {
    // console.log('MyPlugin--->compiler: ',compiler);
    // console.log('MyPlugin-->arguments: ',arguments);
    var t1 = +new Date;
    var t2,t3;
    compiler.plugin('emit',function(compilation,callback){
          t2 = +new Date;
         console.log(' emit t2-t1:',t2-t1,'callback:',callback);
         myFunc(callback);
        //  callback();
    });
    compiler.plugin('after-emit',function(){
          t3 = +new Date;
         console.log(' after-emit t3-t1:',t3-t1,' t3-t2:',t3-t2);
         // run our custom build
    })
    //now you have access to all the compiler instance methods
}
module.exports = MyPlugin;
