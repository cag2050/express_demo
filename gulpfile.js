/**
 * Created by cag on 2016/12/6.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('server', function () {
    nodemon({
        script: 'bin/www',
        ignore: ["gulpfile.js", "node_modules/", "public/**/*.*"],
        env: {'NODE_ENV': 'development'}
    }).on('start', function () {
        browserSync.init({
            proxy: 'http://localhost:3000',
            files: ["public/**/*.*", "views/*.*", "routes/*.js"],
            browser: ["chrome"],
            port: 8080
        }, function () {
            console.log("browser refreshed.");
        });
    });
});

gulp.task("default", ["server"]);