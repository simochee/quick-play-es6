const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpackStream');

const config = require('../config');

gulp.task('webpack', () => {
  gulp.src(`${config.src.js}**/*.js`)
      .pipe(webpackStream({
        rules: [
          {
            test: /\.js$/,
            use: ['babel-loader'],
            enforce: 'post',
          },
        ],
        devtool: 'inline-source-map',
      }, webpack))
      .pipe(gulp.dest(config.dist.js));
});