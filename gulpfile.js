var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefix = require("gulp-autoprefixer");
var browser = require("browser-sync");
var img_compress = require("gulp-imagemin");

gulp.task("styles", async () => {
  gulp
    .src("./app/sass/*.sass")
    .pipe(sass())
    .pipe(
      autoprefix({
        browsers: ['last 25 versions']
      })
    )
    .pipe(gulp.dest("./dist/styles/"))
    .pipe(browser.reload({ stream: true }));
});

gulp.task("html", async () => {
  gulp
    .src("./app/*.html")
    .pipe(gulp.dest("./dist/"))
    .pipe(browser.reload({ stream: true }));
});

gulp.task("scripts", async () => {
  gulp
    .src("./app/js/*.js")
    .pipe(gulp.dest("./dist/js/"))
    .pipe(browser.reload({ stream: true }));
});

gulp.task("browser-sync", async () => {
  browser.init({
    server: {
      baseDir: "./dist",
    },
    notify: false,
  });
});

gulp.task("image-compress", async ()=>{
  gulp.src("./app/images/*")
  .pipe(img_compress())
  .pipe(gulp.dest("./dist/images/"))
  .pipe(browser.reload({ stream: true }));
});

gulp.task("watch", async () => {
  gulp.watch("./app/sass/*.sass", gulp.parallel("styles"));
  gulp.watch("./app/*.html", gulp.parallel("html"));
  gulp.watch("./app/js/*.js", gulp.parallel("scripts"));
  gulp.watch("./app/images/*", gulp.parallel("image-compress"));
});

gulp.task("default", gulp.parallel("styles", "html", "scripts", "browser-sync", "watch"));
