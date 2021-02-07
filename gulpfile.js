const gulp = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const { readFileSync } = require('fs');
const rev = require('gulp-rev');
const rewrite = require('gulp-rev-rewrite');

// Gulp task to minify HTML files
function minHTML() {
    return gulp.src(['./**/*.html', '!./node_modules/**/*'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true
        }))
        .pipe(gulp.dest('./dist'));
}

// Gulp task to minify CSS, remove unused CSS, and autoprefix for multi-browser support
function postCSS() {
    const plugins = [
        cssnano(),
        purgecss({
            content: ['./**/*.html'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/.]+/g) || []
        }),
        autoprefixer()
    ];
    return gulp.src(['./assets/styles/styles.css'])
        .pipe(postcss(plugins))
        .pipe(rev())
        .pipe(gulp.dest('./dist/assets/styles'))
        .pipe(rev.manifest({ merge: false }))
        .pipe(gulp.dest('./'));
}

// Gulp task to copy images into the dist folder
function copyImages() {
    return gulp.src(['./assets/images/**/*.{png,jpg,jpeg,gif,webp}'])
        .pipe(rev())
        .pipe(gulp.dest('./dist/assets/images'))
        .pipe(rev.manifest({ merge: true }))
        .pipe(gulp.dest('./'));
}

// Gulp task to rewrite file names to cach-busted file names
function revRewrite() {
    const manifest = readFileSync('./rev-manifest.json');
    return gulp.src(['./dist/**/*.html'])
        .pipe(rewrite({ manifest }))
        .pipe(gulp.dest('./dist'));
}

// Gulp task to empty the dist folder
function clean() {
    return del(['./dist/**']);
}

// Gulp default task (run by typing 'gulp' in the console)
gulp.task('default', gulp.series(clean, minHTML, postCSS, copyImages, revRewrite));