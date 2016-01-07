var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function () {
    return gulp.src('./*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./')).on('error', gutil.log);
});

// Minify CSS: Run manually with: "gulp minify-css"
gulp.task('minify-css', function () {
    return gulp.src(['./*.css', '!./*.min.css'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(cssmin({
            keepSpecialComments: false,
            advanced: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./')).on('error', gutil.log);
});

// Minify JS: Run manually with: "gulp uglify-js"
gulp.task('uglify-js', function () {
    return gulp.src(['./*.js', '!./*.min.js', '!gulpfile.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./')).on('error', gutil.log);
});

// Watch LESS, CSS and JS: Run manually with: "gulp watch"
gulp.task('watch', function () {
    gulp.watch('./*.less', ['build-css']);
    gulp.watch('./*.css', ['minify-css']);
    gulp.watch(['./*.js', './!gulpfile.js'], ['uglify-js']);
});

// Default task
gulp.task('default', ['build-css', 'minify-css', 'uglify-js', 'watch']);
