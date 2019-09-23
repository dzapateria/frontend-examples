const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function style(){

    /* 1. Entradas de los css de origen, opciones de ejemplo, descomenta la deseada */    

     return gulp.src('./scss/**/{main,caja}*.scss') /* Multiples entradas, y directorio padre NOTA: Generara 2 salidas */
     // return gulp.src('./src/main.scss') /*  Un archivo de entrada único */
     // return gulp.src(['./src/main.scss', './partials/**/*.scss']) /* Multiples entradas en diferentes directorios NOTA: Generara 2 salidas */
     // return gulp.src('./src/**/*.scss')/* Compilar todo del directorio Nota: Puedes poner en una carpeta los que realizan imports */

    /* 2. Init sourcemaps */
      .pipe(sourcemaps.init())
    /* 3. Compilar */
      .pipe(sass())
      .on("error", sass.logError)
    /* 4. Autoprefixer u otros plugins de POSTCSS, añade al array 'nano()' para minificar */
      .pipe(postcss([ autoprefixer()]))
    /* 5. Escribir los sourcemaps */
      .pipe(sourcemaps.write())
    /* 6. Destino de los archivos CSS */
      .pipe(gulp.dest('./dist'))
    /* 7. Enviar cambios a los navegadores */
      .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        proxy: "frontend-examples.test/build_tools/gulp4/04-gulp-sass-bs-sourcemaps-autoprefixer/"
        //tunnel: 'soloaplicaciones'
    });
    gulp.watch('scss/**/*.scss', style);

    /* Si hubiera otra ruta donde tienes scss */
    // gulp.watch('partials/**/*.scss', style);

    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
    gulp.watch('./**/*.{php,html,twig,json}').on('change', browserSync.reload)
}
exports.style = style;
exports.watch = watch;