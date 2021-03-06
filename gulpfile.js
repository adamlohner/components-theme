"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require("gulp-cssmin");
var clean = require("gulp-rimraf");

gulp.task("clean", [], function() {
  return gulp.src("lib/*", { read: false }).pipe(clean());
});

gulp.task("compile", ["clean"], function() {
  return gulp
    .src("./src/*.scss")
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ["ie >= 11", "last 2 versions"],
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest("./lib"));
});

gulp.task("fonts", function() {
  return gulp.src("./src/fonts/**").pipe(gulp.dest("./lib/fonts"));
});

gulp.task("icons", function() {
  return gulp
    .src("./src/feather-icons/**")
    .pipe(gulp.dest("./lib/feather-icons"));
});

gulp.task("build", ["compile", "fonts"]);
