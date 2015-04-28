var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('compile', function () {
    return gulp.src('javascript/src/*.js')
        .pipe(react())
        .pipe(gulp.dest('javascript/app'));
});

gulp.task('default', function () {
  var watcher = gulp.watch('javascript/src/*.js', ['compile']);
  watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
});
