"use strict";

import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";

gulp.task("build:assets:css", () => {
  return gulp.src("src/scss/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass.sync())
      .pipe(autoprefixer())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("css"));
});

gulp.task("build", () => {
  gulp.start(
      "build:assets:css"
  )
});

gulp.task("serve", () => {
  gulp.watch(
      [
        "./src/scss/**/*.scss"
      ],
      ["build:assets:css"]
  )
});
