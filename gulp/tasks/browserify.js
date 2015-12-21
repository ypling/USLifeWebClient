var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var connect = require('gulp-connect');
var notify = require('gulp-notify');
var config = require('../config').browserify;

watchify.args.debug = config.debug;
var bundler = watchify(browserify({
  entries: [config.src],
  transform: config.settings.transform,
  debug: config.debug,
  cache: {}, packageCache: {}, fullPaths: true
}));

gulp.task('browserify', bundle);
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
  // log errors if they happen
  .on('error', function (error) {return notify().write(error);})
  .pipe(source(config.outputName))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload());
  notify().write('Updated at ' + new Date());
}
