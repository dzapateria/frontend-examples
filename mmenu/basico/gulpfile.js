// Initialize modules
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { series, parallel } = require('gulp');
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function js(){ return gulp.src(['assets/js/app.js']).pipe(browserSync.stream()); }

function styles(){
    return gulp.src('assets/scss/main.scss') /* 1. Entradas de los css de origen, opciones de ejemplo, descomenta la deseada */
        .pipe(sourcemaps.init())  /* 2. Init sourcemaps */
        .pipe(sass().on("error", sass.logError)) /* 3. Compilar */
        .pipe(postcss([ autoprefixer()])) /* 4. Autoprefixer u otros plugins de POSTCSS, añade al array 'nano()' para minificar */
        .pipe(sourcemaps.write())  /* 5. Escribir los sourcemaps */
        .pipe(gulp.dest('assets/css/'))  /* 6. Destino de los archivos CSS */
        .pipe(browserSync.stream());  /* 7. Enviar cambios a los navegadores */
}

function watch() {
    browserSync.init({
        proxy: 'frontend-examples.test/mmenu/basico/'
    });
    gulp.watch('assets/scss/**/*.scss', styles);
    gulp.watch('assets/js/app.js', js);
    gulp.watch('./**/*.{php,html,twig,json}').on('change', browserSync.reload) // CUIDADO CON LOS ESPACIOS ENTRE {}
}

exports.js = js; /*  $gulp js */
exports.styles = styles; /*  $gulp js */
exports.default = series(js, styles, watch) /* $gulp */