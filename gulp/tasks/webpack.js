const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const config = require('../config');

gulp.task('webpack', () => {
  gulp.src(`${config.src.js}**/*.js`)
      .pipe(webpackStream({
        devtool: 'inline-source-map',
        module: {
          rules: [
            {
              test: /\.js$/,
              use: ['babel-loader'],
              enforce: 'post',
            },
          ],
        },
      }, webpack))
      .pipe(gulp.dest(config.dist.js));
});