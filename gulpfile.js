var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var pjson = require('./package.json');
var rimraf = require('gulp-rimraf');
var replace = require('gulp-replace');
var concat = require('gulp-concat-util');
var header = require('gulp-header');
var fs = require('fs');

// =========================================================================
// Clean tasks
// =========================================================================
var clearFolder = function (src) {
    return gulp.src(src)
        .pipe(rimraf()).on('error', gutil.log);
};

gulp.task('clean-css-dist', function () {
    return clearFolder('./dist/css/*.*');
});
gulp.task('clean-js-dist', function () {
    return clearFolder('./dist/js/*.*');
});
gulp.task('clean-css-src', function () {
    return clearFolder('./src/css/*.*');
});
gulp.task('clean-snippets-examples', function () {
    return clearFolder('./examples/snippets');
});

// =========================================================================
// Components tasks
// =========================================================================
var buildComponents = function (typeType) {
    return gulp.src(['./src/' + typeType + '/keditor-component-*.' + typeType])
        .pipe(plumber())
        .pipe(concat('keditor-components.' + typeType + ''))
        .pipe(gulp.dest('./dist/' + typeType + '/'));
};

gulp.task('build-css-components', function () {
    return buildComponents('css');
});
gulp.task('build-js-components', function () {
    return buildComponents('js');
});

// =========================================================================
// Copy tasks
// =========================================================================
gulp.task('copy-css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css/'));
});
gulp.task('copy-js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(replace('@{version}', pjson.version))
        .pipe(gulp.dest('./dist/js/'));
});
gulp.task('copy-snippets-src-examples', function () {
    return gulp.src('./src/snippets/**/*')
        .pipe(gulp.dest('./examples/snippets'));
});

// =========================================================================
// Minify tasks
// =========================================================================
gulp.task('min-css', function () {
    return gulp.src('./dist/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cssmin({
            specialComments: 1,
            advanced: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('min-js', function () {
    return gulp.src(['./dist/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify({
            preserveComments: /(?:^!|@(?:license|preserve|cc_on))/
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js/')).on('error', gutil.log);
});

// =========================================================================
// Header tasks
// =========================================================================
var prependHeader = function (fileType) {
    return gulp.src(['./dist/' + fileType + '/*.' + fileType])
        .pipe(header(fs.readFileSync('./header.txt', 'utf8'), { pkg: pjson }))
        .pipe(gulp.dest('./dist/' + fileType));
};

gulp.task('prepend-header-css', function () {
    return prependHeader('css');
});
gulp.task('prepend-header-js', function () {
    return prependHeader('js');
});

// =========================================================================
// Examples tasks
// =========================================================================
gulp.task('build-snippets-examples', gulpsync.sync(['clean-snippets-examples', 'copy-snippets-src-examples']));

// =========================================================================
// Build CSS
// =========================================================================
gulp.task('compile-less', function () {
    return gulp.src(['./src/less/*.less', '!./src/less/_*.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./src/css/')).on('error', gutil.log);
});
gulp.task('build-css', gulpsync.sync(['clean-css-src', 'compile-less']));

// =========================================================================
// Watch
// =========================================================================
gulp.task('watch', function () {
    gulp.watch(['./src/less/*.less'], ['build-css']);
});

// =========================================================================
// Main tasks
// =========================================================================
gulp.task('build-css-dist', gulpsync.sync(['build-css', 'clean-css-dist', 'copy-css', 'build-css-components', 'min-css', 'prepend-header-css']));
gulp.task('build-js-dist', gulpsync.sync(['clean-js-dist', 'copy-js', 'build-js-components', 'min-js', 'prepend-header-js']));

gulp.task('build', ['build-css-dist', 'build-js-dist', 'build-snippets-examples']);

gulp.task('dev', ['build-css', 'watch']);

// Gulp Default
gulp.task('default', ['build', 'dev']);
