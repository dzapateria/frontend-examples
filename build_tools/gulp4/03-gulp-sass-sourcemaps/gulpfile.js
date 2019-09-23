const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


// Compile scss into css

function style(){
    // 1. Where is my scss file
        //-------- A) One file main
             // return gulp.src('./src/main.scss')
        //--------B) multiple main files in same directory
            return gulp.src('./src/{main,caja}*.scss') //
        //--------C) multiple main files in diferent directories
             //  return gulp.src(['./src/main.scss', './partials/**/*.scss'])
        //-------D) Compile all main files in directory
              // return gulp.src('./src/**/*.scss')

   // 2. Init sourcemaps
          .pipe(sourcemaps.init())
    // 3.pass that file through sass compiler
        .pipe(sass())
        // 4. write sourcemaps
       .pipe(sourcemaps.write())
    // 5.where do i save compiled css
        .pipe(gulp.dest('./dist'))

    // 5. stream changes to all browsers
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        proxy: "frontend-examples.test/build_tools/gulp4/03-gulp-sass-autoprefixer/",
        //tunnel: 'soloaplicaciones'
    });
    gulp.watch('src/**/*.scss', style);
    gulp.watch('partials/**/*.scss', style);

    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload)
}
exports.style = style;
exports.watch = watch;