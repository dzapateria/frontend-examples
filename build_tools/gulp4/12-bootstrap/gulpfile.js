// Initialize modules
const gulp = require('gulp');
const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglifyJs = require('gulp-uglify');

// File path & variables

const config = {
    proxy: 'frontend-examples.test/build_tools/gulp4/12-bootstrap/',  //format  frontend-examples.test

    scssInputs: 'scss/**/{main,caja}*.scss', // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN {} - Multiples entradas, y directorio padre NOTA: Generara 2 salidas
    jsInputs: [
     'node_modules/lodash/lodash.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'es5/**/{main,write,lib3,lib2,lib}*.js',
    'es5/modulo/**/{write}*.js'
    ],  // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN { }

    jsWathDir: 'es5/**/*.js',
    scssWathDir: 'scss/**/*.scss',
    filesWatch: './**/*.{php,html,twig,json}', // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN {}

    outDir: './dist'
}

function jscompress(){
      return gulp.src('./dist/**/*.js')
          .pipe(uglifyJs())
          .pipe(gulp.dest(config.outDir)
    );
}


function css(){

    /* 1. Entradas de los css de origen, opciones de ejemplo, descomenta la deseada */
     return gulp.src(config.scssInputs)
     // return gulp.src('./src/main.scss') /*  Un archivo de entrada único */
     // return gulp.src(['./src/main.scss', './partials/**/*.scss']) /* Multiples entradas en diferentes directorios NOTA: Generara 2 salidas */
     // return gulp.src('./src/**/*.scss') // Compilar todo del directorio Nota: Puedes poner en una carpeta los que realizan imports

      .pipe(sourcemaps.init())  /* 2. Init sourcemaps */
      .pipe(sass().on("error", sass.logError)) /* 3. Compilar */
      .pipe(postcss([ autoprefixer()])) /* 4. Autoprefixer u otros plugins de POSTCSS, añade al array 'nano()' para minificar */
      .pipe(sourcemaps.write())  /* 5. Escribir los sourcemaps */
      .pipe(gulp.dest(config.outDir))  /* 6. Destino de los archivos CSS */
      .pipe(browserSync.stream());  /* 7. Enviar cambios a los navegadores */
}

function js(){
    return gulp.src(config.jsInputs)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())

        .pipe(gulp.dest(config.outDir))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        proxy: config.proxy
        //tunnel: 'soloaplicaciones'
    });
    gulp.watch(config.scssWathDir, css);
    gulp.watch(config.jsWathDir, js);
    /* Si hubiera otra ruta donde tienes scss */
    // gulp.watch('partials/**/*.scss', css);
    gulp.watch(config.filesWatch).on('change', browserSync.reload) // CUIDADO CON LOS ESPACIOS ENTRE {}
}

exports.js = js; /*  $gulp js */
exports.css = css; /*  $gulp js */
exports.jscompress = jscompress;

exports.build = series(js, css, jscompress)

exports.default = series(js, css, watch) /* $gulp */