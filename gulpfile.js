const gulp = require('gulp')
const uglify = require('gulp-terser')

gulp.task('minify' , function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest'))
})

gulp.task('watch', function () {
    return gulp.watch('src/*.js',{events: 'all'}, gulp.series('minify'))
})

gulp.task('default', gulp.parallel('watch'))