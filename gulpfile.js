var gulp = require('gulp');
var tinypng = require('gulp-tinypng');

let cb 
function runImageMini(callback){
    console.log(' runImageMini------>callback--------->',callback)
     gulp.start('imagemini');
     cb = callback;
}


gulp.task('imagemini', function (done) {
    console.time('a');
    gulp.src('src/**/*.min.png')
        // .pipe(tinypng('cNJZ3e97EZZWg9olNwloydhswxJsQAPx'))
        .pipe(gulp.dest('src'))
        .on('end',function(){
            console.timeEnd('a');
            console.error('图片已经压缩完毕',' done:',done);
            // cb(); //执行下一个任务
        });
});

gulp.task('test', function () {
    // eg: copy *.js files into `./gulp`
    gulp.src('./build/**/*.js')
    .pipe(gulp.dest('./gulp'))
    .on('end', function () {
      if (done) { 
        console.warn(' gulp done--->',done);
        done(); // callback to signal end of build
      }
    });
});


module.exports = runImageMini;