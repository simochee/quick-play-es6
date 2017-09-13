const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require('../config');

gulp.task('server', () => {
  browserSync.init(null, {
    server: {
      baseDir: config.dist.root,
    },
    port: config.server.port || 43000,
    notify: config.server.notify || false,
  });
});