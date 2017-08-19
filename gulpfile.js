var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var cssnano=require('gulp-cssnano');

gulp.task('cssmin', function() {
    return gulp.src('public/stylesheets/style*.css')
        .pipe(concat('combined.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
        return gulp.src('public/js/Sample*.js')
        .pipe(concat('combined.min.js'))
        .pipe(uglify({mangle:true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglifyWithoutCombiningFile', function() {
    return gulp.src('public/js/Sample*.js')
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch('public/js/Sample*.js',['uglify']);
  gulp.watch('public/stylesheets/style*.css',['cssmin']);
});

gulp.task('default', ['watch']);
