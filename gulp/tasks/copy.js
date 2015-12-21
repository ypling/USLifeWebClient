var gulp = require('gulp');
var config = require('../config').copy;

gulp.task('copy', function() {
  config.forEach(function(item){
    gulp.src(item.src)
    .pipe(gulp.dest(item.dest));
  });
});
