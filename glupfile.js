const gulp = require('gulp');

gulp.task('style', () => {
  gulp.src(jsFiles)
      .pipe(jshint());
});
