"use strict";
var gulp = require('gulp');
var tinypng = require('gulp-tinypng');

gulp.task('imagemini', function (done) {
    console.time('time');
    let t1 = +new Date;
    gulp.src('src/**/*.min.png')
        .pipe(tinypng('app_key(去tinypng申请)'))
        .pipe(gulp.dest('src'))
        .on('end',function(){
            let t2 = +new Date;
            console.error(`图片已经压缩完毕====================合计用时:${Math.round((t2-t1)/1000)}s`);
            done();// callback to signal end of build
            /*
                 done: function (err) {
                    finish(err, 'callback');
                 }
            */
        });
});

gulp.task('default',function(){
    if (gulp.tasks.imagemini) { 
         console.log('图片正则压缩中====================');
         gulp.start('imagemini');
    }
});