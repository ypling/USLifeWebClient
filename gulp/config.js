var dest = './dist';
var src = './src';
var gutil = require('gulp-util');
var babelify = require('babelify');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      style:'compressed',
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ["babelify","reactify"]
    },
    src: src + '/js/index.jsx',
    dest: dest + '/js',
    outputName: 'main.js',
    debug: gutil.env.type === 'dev'
  },
  copy: [
    {src: 'src/index.html',dest: dest},
    {src: 'bower_components/tinymce/**/*.*', dest:dest+'/js/tinymce'},
    {src: 'node_modules/bootstrap-sass/assets/fonts/**/*.*', dest:dest+'/fonts'},
  ],
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
