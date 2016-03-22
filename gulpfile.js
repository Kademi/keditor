var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
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
var concat = require('gulp-concat-util');

var clearFolder = function (src) {
    return gulp.src(src)
        .pipe(rimraf()).on('error', gutil.log);
};

gulp.task('clean-css-dist', function () {
    return clearFolder('./dist/css/*.*');
});

gulp.task('build-css-keditor', function () {
    return gulp.src('./src/less/keditor.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(replace('@{version}', pjson.version))
        .pipe(rename({
            suffix: '-' + pjson.version
        }))
        .pipe(gulp.dest('./dist/css/'), {
            base: './src/less/'
        })
        .pipe(sourcemaps.init())
        .pipe(cssmin({
            keepSpecialComments: 1,
            advanced: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('build-css-components', function () {
    return gulp.src(['./src/less/keditor-component-*.less', '!./src/less/keditor.less', '!./src/less/_*.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(concat('keditor-components.css'))
        .pipe(replace('@{version}', pjson.version))
        .pipe(rename({
            suffix: '-' + pjson.version
        }))
        .pipe(gulp.dest('./dist/css/'), {
            base: './src/less/'
        })
        .pipe(sourcemaps.init())
        .pipe(cssmin({
            keepSpecialComments: '1',
            advanced: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('build-css-dist', gulpsync.sync(['clean-css-dist', 'build-css-keditor', 'build-css-components']));

gulp.task('clean-js-dist', function () {
    return clearFolder('./dist/js/*.*');
});

gulp.task('build-js-keditor', function () {
    return gulp.src(['./src/js/keditor.js'])
        .pipe(plumber())
        .pipe(replace('@{version}', pjson.version))
        .pipe(rename({
            suffix: '-' + pjson.version
        }))
        .pipe(gulp.dest('./dist/js/'), {
            base: './src/'
        })
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

gulp.task('build-js-components', function () {
    return gulp.src(['./src/js/keditor-component-*.js', '!./src/js/keditor.js'])
        .pipe(plumber())
        .pipe(concat('keditor-components.js'))
        .pipe(replace('@{version}', pjson.version))
        .pipe(rename({
            suffix: '-' + pjson.version
        }))
        .pipe(gulp.dest('./dist/js/'), {
            base: './src/'
        })
        .pipe(sourcemaps.init())
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js/')).on('error', gutil.log);
});

gulp.task('build-js-dist', gulpsync.sync(['clean-js-dist', 'build-js-keditor', 'build-js-components']));

gulp.task('clean-snippets-examples', function () {
    return clearFolder('./examples/snippets');
});

gulp.task('copy-snippets-src-examples', function () {
    return gulp.src('./src/snippets/**/*')
        .pipe(gulp.dest('./examples/snippets'));
});

gulp.task('build-snippets-examples', gulpsync.sync(['clean-snippets-examples', 'copy-snippets-src-examples']));

gulp.task('clean-css-test', function () {
    return clearFolder('./src/css/*.*');
});

gulp.task('compile-less-test', function () {
    return gulp.src(['./src/less/*.less', '!./src/less/_*.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./src/css/')).on('error', gutil.log);
});

gulp.task('build-css-test', gulpsync.sync(['clean-css-test', 'compile-less-test']));

gulp.task('watch', function () {
    gulp.watch(['./src/less/*.less'], ['build-css-test']);
});

// Gulp Build
gulp.task('build', ['build-css-dist', 'build-js-dist', 'build-snippets-examples']);

// Gulp Dev
gulp.task('dev', ['build-css-test', 'watch']);

// Gulp Default
gulp.task('default', ['build', 'dev']);
