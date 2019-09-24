const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const { series } = require('gulp');

function style(){

    /* 1. Entradas de los css de origen, opciones de ejemplo, descomenta la deseada */    

     return gulp.src('./scss/**/{main,caja}*.scss') /* Multiples entradas, y directorio padre NOTA: Generara 2 salidas --- CUIDADO CON LOS ESPACIOS ENTRE {} --- */
     // return gulp.src('./src/main.scss') /*  Un archivo de entrada único */
     // return gulp.src(['./src/main.scss', './partials/**/*.scss']) /* Multiples entradas en diferentes directorios NOTA: Generara 2 salidas */
     // return gulp.src('./src/**/*.scss')/* Compilar todo del directorio Nota: Puedes poner en una carpeta los que realizan imports */

    /* 2. Init sourcemaps */
      .pipe(sourcemaps.init())
    /* 3. Compilar */
      .pipe(sass().on("error", sass.logError))
    /* 4. Autoprefixer u otros plugins de POSTCSS, añade al array 'nano()' para minificar */
      .pipe(postcss([ autoprefixer()]))
    /* 5. Escribir los sourcemaps */
      .pipe(sourcemaps.write())
    /* 6. Destino de los archivos CSS */
      .pipe(gulp.dest('./dist'))
    /* 7. Enviar cambios a los navegadores */
      .pipe(browserSync.stream());
}


function js(){
    return gulp.src(['./es5/**/{main,write,lib}*.js']) // CUIDADO CON LOS ESPACIOS ENTRE {}
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        proxy: "frontend-examples.test/build_tools/gulp4/05-gulp-browsersync-js-stream/"
        //tunnel: 'soloaplicaciones'
    });
    gulp.watch('scss/**/*.scss', style);
    gulp.watch('es5/**/*.js', js);
    /* Si hubiera otra ruta donde tienes scss */
    // gulp.watch('partials/**/*.scss', style);

    //gulp.watch('./src/**/*.js').on('change', browserSync.reload);

    gulp.watch('./**/*.{php,html,twig,json}').on('change', browserSync.reload) // CUIDADO CON LOS ESPACIOS ENTRE {}
}
exports.style = style;
exports.watch = watch;
exports.js = js;

style();
js();