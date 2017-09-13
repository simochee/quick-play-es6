const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require('../config');

gulp.task('watch', () => {
  // html
  gulp.watch(`${config.src.html}**/*`, () => {
    gulp.start('pug');
    browserSync.reload();
  });
  
  // js
  gulp.watch(`${config.src.js}**/*`, () => {
    gulp.start('webpack');
    browserSync.reload();
  });

  // css
  gulp.watch(`${config.src.css}**/*`, () => {
    gulp.start('stylus');
    browserSync.stream();
  });
});