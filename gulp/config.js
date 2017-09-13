const src = './src/';
const dist = './docs/';

module.exports = {
  server: {
    port: 43000,
    notify: false,
  },
  
  src: {
    js: `${src}javascripts/`,
  },

  dist: {
    root: dist,
    js: `${dist}javascripts/`,
  }
}