module.exports = function() {
  // global vars
  var gulp    = this.gulp,
      plugins = this.opts.plugins,
      configs = this.opts.configs;

  // Gulp task body
  plugins.browserSync({
    proxy: "m2test.dev"
  });
};
