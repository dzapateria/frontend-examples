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
    proxy: 'frontend-examples.test/build_tools/gulp4/13-vue-ts/',  //format  frontend-examples.test
    scssInputs: 'src/scss/**/{main,caja}*.scss', // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN {} - Multiples entradas, y directorio padre NOTA: Generara 2 salidas
    jsVendorInputs: [
        'src/js/vendor/lodash.min.js',
        'src/js/vendor/jquery.min.js',
        'src/js/vendor/vue.min.js',
    ],  // -- CUIDADO NO PONER ESPACIOS ENTRE ITEMS EN { }
    jsPluginsInputs:['src/js/plugins/bootstrap.bundle.min.js'],
    jsOnReadyInputs:[
        'src/onready/functions/{uno,dos,tres}.js',
        'src/onready/**/{lib1,lib2,lib3}*.js'
    ],
    jsWathDir: [
        'src/onready/**/{*.js,*.ts}',
        'src/ts/**/{*.ts}'
    ],
    scssWathDir: 'src/scss/**/*.scss',
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

function jsVendor(){
    return gulp.src(config.jsVendorInputs)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outDir))
        .pipe(browserSync.stream());
}

function jsPlugins(){
    return gulp.src(config.jsPluginsInputs)
        .pipe(sourcemaps.init())
        .pipe(concat('plugins.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outDir))
        .pipe(browserSync.stream());
}

function jsOnReady(){
    return gulp.src(config.jsOnReadyInputs)
        .pipe(sourcemaps.init())
        .pipe(concat('onready.js'))
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
    gulp.watch(config.jsWathDir, jsOnReady);
    /* Si hubiera otra ruta donde tienes scss */
    // gulp.watch('partials/**/*.scss', css);
    gulp.watch(config.filesWatch).on('change', browserSync.reload) // CUIDADO CON LOS ESPACIOS ENTRE {}
}

exports.jsVendor = jsVendor; /*  $gulp js */
exports.jsPlugins = jsPlugins; /*  $gulp js */
exports.jsOnReady = jsOnReady; /*  $gulp js */
exports.css = css; /*  $gulp js */
exports.jscompress = jscompress;

exports.build = series(jsVendor, jsPlugins,  jsOnReady, css, jscompress)

exports.default = series(jsOnReady, css, watch) /* $gulp */