const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

const config = require('../config')

gulp.task('stylus', () => {
  gulp.src(`${config.src.css}**/*.styl`)
      .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dist.css));
});