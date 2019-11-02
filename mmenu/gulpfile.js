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
    proxy: 'frontend-examples.test/mmenu/fullscreen/',  //format  frontend-examples.test
    stylesInputs: [ // output app.css
    ],
    jsCdnInputs: [ // output dist/cdn.js
        '../cdn/jquery.min.js',
        '../cdn/bootstrap.bundle.min.js',
    ],  // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN { }
    jsInputs:[ // output app.js

    ],
    jsWathDir: [
        'src/js/**/{*.js,*.ts}'
    ],
    scssWathDir: 'src/css/**/*.{css,scss}',
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
     return gulp.src(config.stylesInputs) /* 1. Entradas de los css de origen, opciones de ejemplo, descomenta la deseada */
      .pipe(sourcemaps.init())  /* 2. Init sourcemaps */
         .pipe(concat('app.css'))
      .pipe(sass().on("error", sass.logError)) /* 3. Compilar */
      .pipe(postcss([ autoprefixer()])) /* 4. Autoprefixer u otros plugins de POSTCSS, añade al array 'nano()' para minificar */
      .pipe(sourcemaps.write())  /* 5. Escribir los sourcemaps */
      .pipe(gulp.dest(config.outDir))  /* 6. Destino de los archivos CSS */
      .pipe(browserSync.stream());  /* 7. Enviar cambios a los navegadores */
}

function jsCdn(){
    return gulp.src(config.jsCdnInputs)
        .pipe(sourcemaps.init())
        .pipe(concat('cdn.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outDir))
        .pipe(browserSync.stream());
}

function js(){
    return gulp.src(config.jsInputs)
        .pipe(sourcemaps.init())
        .pipe(concat('gulp.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outDir))
        .pipe(browserSync.stream());
}



function watch() {
    browserSync.init({
        proxy: config.proxy,
       // tunnel: 'soloaplicaciones'
    });
    gulp.watch(config.scssWathDir, css);
    gulp.watch(config.jsWathDir, js);
    /* Si hubiera otra ruta donde tienes scss */
    // gulp.watch('partials/**/*.scss', css);
    gulp.watch(config.filesWatch).on('change', browserSync.reload) // CUIDADO CON LOS ESPACIOS ENTRE {}
}

exports.jsCdn = jsCdn; /*  $gulp js */
exports.js = js; /*  $gulp js */
exports.css = css; /*  $gulp js */
exports.jscompress = jscompress;


exports.build = series(jsCdn, js, css, jscompress)

exports.default = series(jsCdn, js, css, watch) /* $gulp */