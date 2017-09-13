const gulp = require('gulp');
const pug = require('gulp-pug');

const config = require('../config')

gulp.task('pug', () => {
  gulp.src(`${config.src.html}**/*.pug`, {base: config.src.root})
      .pipe(pug())
      .pipe(gulp.dest(config.dist.html));
});