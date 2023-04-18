'use strict';

const gulp = require('gulp');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./asset/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./asset/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./asset/sass/*.scss', buildStyles());
};