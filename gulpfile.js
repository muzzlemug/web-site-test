const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const notify =  require('gulp-notify')
const webpack = require('webpack-stream')

const plumberHtmlConfig = {
  errorHandler: notify.onError({
    title:'HTML',
    message: 'Error<%= error.message %>',
    sound:false
  })
  }
  

gulp.task('html', function() {
  return gulp.src('./src/*.html')
  .pipe(plumber(plumberSassConfig))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});


const plumberSassConfig = {
errorHandler: notify.onError({
  title:'Styles',
  message: 'Error<%= error.message %>',
  sound:false
})
}

const plumberJsConfig = {
  errorHandler: notify.onError({
    title:'Js',
    message: 'Error<%= error.message %>',
    sound:false
  })
  }

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
  .pipe(plumber(plumberSassConfig))
  .pipe(sourceMaps.init())
  .pipe(sass())
  .pipe(sourceMaps.write())
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function() {
  return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img/'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('server', function() {
  return gulp.src('./dist').pipe(server({
    livereload: true,
    open: true,
    port: 35730 // Укажите другой порт, если 35729 занят
  }));
});

gulp.task('js',function(){
  return gulp.src('./src/js/*.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./src/**/*.html', gulp.parallel('html'));
  gulp.watch('./src/img/**/*', gulp.parallel('images'));
  gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
  gulp.watch('./src/js/*.js', gulp.parallel('fonts'));
  
});

gulp.task('clean', function() {
  if (fs.existsSync('./dist/')) {
    return gulp.src('./dist/', { read: false }).pipe(clean());
  } else {
    return Promise.resolve();
  }
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('html', 'sass', 'images','fonts','js'),
  gulp.parallel('server', 'watch')
));
