
## Gulp + Browsersync + Sass

Referencia youtube Kevin Powell - [Gulp v4 - Sass and BrowserSync Setup](1)

Instala dependencias de desarrollo
``` 
npm i browser-sync node-sass gulp gulp-sass gulp-sourcemaps del -D
```
Instala globalmente
``` 
npm i gulp-cli -g
```
Crea archivo de configuración ***gulpfile.js***

``` 
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});
```

[1] https://youtu.be/QgMQeLymAdU