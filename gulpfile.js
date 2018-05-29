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
var babel = require('gulp-babel');
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
gulp.task('clean-snippets-examples', function () {
    return clearFolder('./examples/snippets');
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
    return prependHeader('css')
});
gulp.task('prepend-header-js', function () {
    return prependHeader('js')
});

// =========================================================================
// Examples tasks
// =========================================================================
gulp.task('build-snippets-examples', gulpsync.sync(['clean-snippets-examples', 'copy-snippets-src-examples']));

gulp.task('copy-snippets-src-examples', function () {
    return gulp.src('./src/snippets/**/*')
        .pipe(gulp.dest('./examples/snippets'));
});

// =========================================================================
// Build CSS
// =========================================================================
gulp.task('build-css-dev', function () {
    return gulp.src(['./src/less/*.less', '!./src/less/_*.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./src/css/')).on('error', gutil.log);
});

gulp.task('build-css-components', function () {
    return gulp.src(['./src/css/keditor-component-*.css'])
        .pipe(plumber())
        .pipe(concat('keditor-components.css'))
        .pipe(gulp.dest('./src/css/'))
        .on('error', gutil.log);
});

gulp.task('copy-css-dist', function () {
    return gulp.src(['./src/css/keditor.css', './src/css/keditor-components.css'])
        .pipe(gulp.dest('./dist/css/'))
        .on('error', gutil.log);
});

gulp.task('min-css', function () {
    return gulp.src('./dist/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
});

// =========================================================================
// Build JS
// =========================================================================
gulp.task('build-js-dev', function () {
    return gulp.src(['./src/js/*.js'])
        .pipe(babel({
            presets: ['env'],
            plugins: [
                'transform-class-properties'
            ]
        }))
        .pipe(gulp.dest('./src/js-dev/'))
        .on('error', gutil.log);
});

gulp.task('build-js-components', function () {
    return gulp.src(['./src/js/keditor-component-*.js'])
        .pipe(plumber())
        .pipe(concat('keditor-components.js'))
        .pipe(gulp.dest('./src/js-dev/'))
        .on('error', gutil.log);
});

gulp.task('copy-js-dist', function () {
    return gulp.src(['./src/js-dev/keditor.js', './src/js-dev/keditor-components.js'])
        .pipe(gulp.dest('./dist/js/'))
        .on('error', gutil.log);
});

gulp.task('min-js', function () {
    return gulp.src(['./dist/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js/'))
        .on('error', gutil.log);
});

// =========================================================================
// Watch
// =========================================================================
gulp.task('watch', function () {
    gulp.watch(['./src/less/*.less'], ['build-css-dev']);
    gulp.watch(['./src/js/*.js'], ['build-js-dev']);
});

// =========================================================================
// Main tasks
// =========================================================================
gulp.task('build-css-dist', gulpsync.sync([
    'clean-css-dist',
    'build-css-dev',
    'build-css-components',
    'copy-css-dist',
    'min-css',
    'prepend-header-css']));

gulp.task('build-js-dist', gulpsync.sync([
    'clean-js-dist',
    'build-js-dev',
    'build-js-components',
    'copy-js-dist',
    'min-js',
    'prepend-header-js'
]));

gulp.task('build', [
    'build-css-dist',
    'build-js-dist',
    'build-snippets-examples'
]);

gulp.task('dev', [
    'build-css-dev',
    'build-js-dev',
    'watch'
]);

