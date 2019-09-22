const gulp        = require('gulp');
const sass        = require('gulp-sass');

// Compile scss into css

function style(){
    // 1. Where is my scss file
    return gulp.src('./src/**/*.scss')
    // 2.pass that file through sass compiler
        .pipe(sass())
    // 3.where do i save compiled css
        .pipe(gulp.dest('./dist'))
}

exports.style = style;