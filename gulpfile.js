const gulp = require('gulp');
const gzip = require('gulp-gzip');

const [command, value] = (process.argv[3]) ? process.argv[3].split('='): '';

gulp.task('compress', function() {

  const src = (value) ? `./dist/${value}` : `./dist`;

  gulp.src([`${src}/*.js`, `${src}/*.css`])
    .pipe(gzip())
    .pipe(gulp.dest(`${src}`));
});
