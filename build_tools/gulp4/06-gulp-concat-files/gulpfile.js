// Initialize modules

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');

// File path & variables

const config = {
    proxy: 'frontend-examples.test/build_tools/gulp4/06-gulp-concat-files/',  //format  frontend-examples.test
    scssPath: 'scss/**/{main,caja}*.scss', // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN {} - Multiples entradas, y directorio padre NOTA: Generara 2 salidas
    jsPath: 'es5/**/{main,write,lib}*.js', // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN {}
    jsDir: 'es5/**/*.js',
    scssDir: 'scss/**/*.scss',
    filesDir: './**/*.{php,html,twig,json}', // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN {}
    outDir: './dist'
}

function style(){

    /* 1. Entradas de los css de origen, opciones de ejemplo, descomenta la deseada */
     return gulp.src(config.scssPath)
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
      .pipe(gulp.dest(config.outDir))
    /* 7. Enviar cambios a los navegadores */
      .pipe(browserSync.stream());
}


function js(){
    return gulp.src(config.jsPath) // CUIDADO CON LOS ESPACIOS ENTRE {}
        .pipe(gulp.dest(config.outDir))
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        proxy: config.proxy
        //tunnel: 'soloaplicaciones'
    });
    gulp.watch(config.scssDir, style);
    gulp.watch(config.jsDir, js);
    /* Si hubiera otra ruta donde tienes scss */
    // gulp.watch('partials/**/*.scss', style);
    //gulp.watch('./src/**/*.js').on('change', browserSync.reload);

    gulp.watch(config.filesDir).on('change', browserSync.reload) // CUIDADO CON LOS ESPACIOS ENTRE {}
}
exports.style = style;
exports.watch = watch;
exports.js = js;


style();
js();
