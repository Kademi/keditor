const gulp = require('gulp');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const packageJson = require('./package.json');
const rimraf = require('gulp-rimraf');
const concat = require('gulp-concat-util');
const header = require('gulp-header');
const babel = require('gulp-babel');
const fs = require('fs');


// Clean tasks
// ---------------------------------------------------------------
gulp.task('clean-dev-folder', () => {
    return gulp
        .src([
            './src/js/*.*',
            './src/css/*.*'
        ])
        .pipe(rimraf());
});

gulp.task('clean-build-folder', () => {
    return gulp
        .src([
            './dist/js/*.*',
            './dist/css/*.*',
            './examples/snippets'
        ])
        .pipe(rimraf());
});


// Header tasks
// ---------------------------------------------------------------
const prependHeader = (fileType) => {
    return gulp
        .src(`./dist/${fileType}/*.${fileType}`)
        .pipe(
            header(
                fs.readFileSync('./header.txt', 'utf8'),
                {packageJson}
            )
        )
        .pipe(
            gulp.dest(`./dist/${fileType}`)
        );
};

gulp.task('add-header', gulp.series(
    () => prependHeader('css'),
    () => prependHeader('js')
));


// Examples tasks
// ---------------------------------------------------------------
gulp.task('build-snippets-examples',
    () => gulp
        .src('./src/snippets/**/*')
        .pipe(
            gulp.dest('./examples/snippets')
        )
);


// Build CSS
// ---------------------------------------------------------------
gulp.task('build-css-dev',
    () => gulp
        .src([
            './src/styles/*.less',
            '!./src/styles/_*.less'
        ])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./src/css/'))
);

gulp.task('build-css-components',
    () => gulp
        .src('./src/css/keditor-component-*.css')
        .pipe(plumber())
        .pipe(concat('keditor-components.css'))
        .pipe(gulp.dest('./src/css/'))
);

gulp.task('copy-css-dist',
    () => gulp
        .src([
            './src/css/keditor.css',
            './src/css/keditor-components.css'
        ])
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('min-css',
    () => gulp
        .src('./dist/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
);


// Build JS
// ---------------------------------------------------------------
gulp.task('build-js-dev',
    () => gulp
        .src('./src/keditor/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename('keditor.js'))
        .pipe(gulp.dest('./src/js/'))
);

gulp.task('build-js-components',
    () => gulp
        .src(['./src/components/*.js'])
        .pipe(plumber())
        .pipe(concat('keditor-components.js'))
        .pipe(gulp.dest('./src/js/'))
);

gulp.task('copy-js-dist',
    () => gulp
        .src([
            './src/js/keditor.js',
            './src/js/keditor-components.js'
        ])
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('min-js',
    () => gulp
        .src('./dist/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js/'))
);


// Watch
// ---------------------------------------------------------------
gulp.task('watch', gulp.parallel(
    () => gulp.watch(
        ['./src/styles/*.less'],
        gulp.series('build-css-dev')
    ),
    () => gulp.watch(
        ['./src/keditor/**/*.js', './src/components/*.js'],
        gulp.series('build-js-dev')
    )
));


// Main tasks
// ---------------------------------------------------------------
gulp.task('build', gulp.series(
    'clean-build-folder',

    'build-css-dev',
    'build-css-components',
    'copy-css-dist',
    'min-css',

    'build-js-dev',
    'build-js-components',
    'copy-js-dist',
    'min-js',

    'add-header',

    'build-snippets-examples'
));

gulp.task('dev', gulp.series(
    'build-css-dev',
    'build-js-dev',
    'watch'
));
