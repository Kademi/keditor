var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var copy = require('gulp-copy');

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function () {
    return gulp.src('./src/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./dist/css/')).on('error', gutil.log)
        .pipe(sourcemaps.init())
        .pipe(cssmin({
            keepSpecialComments: false,
            advanced: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/')).on('error', gutil.log);
});

// Minify JS: Run manually with: "gulp uglify-js"
gulp.task('uglify-js', function () {
    return gulp.src(['./src/*.js'])
        .pipe(gulp.dest('./dist/js/'), {
            base: './src/'
        })
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js/')).on('error', gutil.log);
});

// Watch LESS, CSS and JS: Run manually with: "gulp watch"
gulp.task('watch', function () {
    gulp.watch('./src/*.less', ['build-css']);
    gulp.watch('./src/*.js', ['uglify-js']);
});

// Default task
gulp.task('default', ['build-css', 'uglify-js', 'watch']);
