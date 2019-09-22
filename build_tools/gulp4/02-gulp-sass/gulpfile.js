const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile scss into css

function style(){
    // 1. Where is my scss file
    return gulp.src('./src/**/*.scss')
    // 2.pass that file through sass compiler
        .pipe(sass())
    // 3.where do i save compiled css
        .pipe(gulp.dest('./dist'))
    // 4. stream changes to all browsers
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        proxy: "frontend-examples.test/build_tools/gulp4/02-gulp-sass/",
        tunnel: 'soloaplicaciones'
    });
    gulp.watch('./src/**/*.scss', style);

    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload)
}
exports.style = style;
exports.watch = watch;