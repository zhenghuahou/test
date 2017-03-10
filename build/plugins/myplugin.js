//MyPlugin.js

var gulp = require('gulp');

function MyPlugin() {
    console.info("我是myplugin构造函数")
};

MyPlugin.prototype.apply = function (compiler) {
    var t1 = +new Date;
    var tmake,tcompile,taftercompile,temit,tafteremit,tdone,tafterplugins;
    compiler.plugin('emit',function(compilation,callback){
          tafterplugins = +new Date;
         console.log(tafterplugins,'emit tafterplugins-t1:',tafterplugins-t1);
         callback();
    });
    
}
module.exports = MyPlugin;
