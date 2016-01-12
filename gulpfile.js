var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var copy = require('gulp-copy');
var pjson = require('./package.json');
var rimraf = require('gulp-rimraf');
var replace = require('gulp-replace');

// Clean folder './dist/css/': Run manually with: "gulp clean-css-dist"
gulp.task('clean-css-dist', function () {
    return gulp.src('./dist/css/*.*')
        .pipe(rimraf());
});

// Clean folder './dist/js/': Run manually with: "gulp clean-js-dist"
gulp.task('clean-js-dist', function () {
    return gulp.src('./dist/js/*.*')
        .pipe(rimraf());
});

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function () {
    return gulp.src('./src/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(replace('@{version}', pjson.version))
        .pipe(rename({
            suffix: '-' + pjson.version
        }))
        .pipe(gulp.dest('./dist/css/')).on('error', gutil.log)
        .pipe(sourcemaps.init())
        .pipe(cssmin({
            keepSpecialComments: 1,
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
        .pipe(replace('@{version}', pjson.version))
        .pipe(rename({
            suffix: '-' + pjson.version
        }))
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
    gulp.watch('./src/*.less', ['clean-css-dist', 'build-css']);
    gulp.watch('./src/*.js', ['clean-js-dist', 'uglify-js']);
});

// Default task
gulp.task('default', ['clean-css-dist', 'build-css', 'clean-js-dist', 'uglify-js', 'watch']);
