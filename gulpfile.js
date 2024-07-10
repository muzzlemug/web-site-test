const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

const plumberHtmlConfig = {
  errorHandler: notify.onError({
    title: 'HTML',
    message: 'Error: <%= error.message %>',
    sound: false
  })
};

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(plumber(plumberHtmlConfig))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

const plumberSassConfig = {
  errorHandler: notify.onError({
    title: 'Styles',
    message: 'Error: <%= error.message %>',
    sound: false
  })
};

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(plumber(plumberSassConfig))
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img/')).pipe(browserSync.stream());

});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*').pipe(gulp.dest('./dist/fonts/')).pipe(browserSync.stream());
  
});

const plumberJsConfig = {
  errorHandler: notify.onError({
    title: 'JavaScript',
    message: 'Error: <%= error.message %>',
    sound: false
  })
};

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(plumber(plumberJsConfig))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('clean', function() {
  if (fs.existsSync('./dist/')) {
    return gulp.src('./dist/', { read: false }).pipe(clean());
  } else {
    return Promise.resolve();
  }
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.html', gulp.series('html'));
  gulp.watch('./src/img/**/*', gulp.series('img'));
  gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
  gulp.watch('./src/js/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('html', 'sass', 'img', 'fonts', 'js'),
  'serve'
));

