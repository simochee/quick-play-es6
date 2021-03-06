const src = './src/';
const dist = './docs/';

module.exports = {
  tasks: [
    'server',
    'pug',
    'webpack',
    'stylus',
    'watch',
  ],
  
  server: {
    port: 43000,
    notify: false,
    open: true,
  },

  src: {
    root: src,
    html: `${src}html`,
    js: `${src}javascripts/`,
    css: `${src}stylesheets/`,
  },

  dist: {
    root: dist,
    html: dist,
    js: `${dist}javascripts/`,
    css: `${dist}stylehseets/`,
  }
}