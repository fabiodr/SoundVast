var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    cleanCss = require("gulp-clean-css"),
    del = require("del"),
    plumber = require("gulp-plumber"),
    order = require("gulp-order"),
    merge = require("merge-stream"),
    sourcemaps = require("gulp-sourcemaps")

var paths = {
    webroot: "./wwwroot/"
};

paths.libroot = paths.webroot + "lib/";
paths.extendedroot = paths.webroot + "extended/";

paths.libCss = [
    "select2/dist/css/select2.css", "dropzone/dist/dropzone.css", "font-awesome/css/font-awesome.css",
    "jquery-ui/themes/base/jquery-ui.css", "jquery-ui/themes/base/autocomplete.css", "jquery-ui/themes/base/datepicker.css",
    "jquery-ui/themes/base/theme.css", "bootstrap-tagsinput/dist/bootstrap-tagsinput.css"
];
paths.libJs = [
    "dropzone/dist/dropzone.js", "jPlayer/dist/jplayer/jquery.jplayer.js", "jPlayer/dist/add-on/jquery.jplayer.inspector.js",
    "history.js/scripts/uncompressed/history.adapter.jquery.js", "jQuery.grab/jquery.grab.js", "ExpressiveAnnotations/src/expressive.annotations.validate.js",
    "lodash/dist/lodash.min.js", "bootstrap-tagsinput/dist/bootstrap-tagsinput.js"
];

for (var i = 0; i < paths.libJs.length; i++) {
    paths.libJs[i] = paths.libroot + paths.libJs[i];
}

for (var i = 0; i < paths.libCss.length; i++) {
    paths.libCss[i] = paths.libroot + paths.libCss[i];
}

paths.extendedJs = paths.extendedroot + "**/*.js";
paths.extendedMinJs = paths.extendedroot + "**/*.min.js";
paths.siteJs = paths.webroot + "js/**/*.js";
paths.siteMinJs = paths.webroot + "js/**/*.min.js";
paths.siteCss = paths.webroot + "css/**/*.css";
paths.siteMinCss = paths.webroot + "css/**/*.min.css";
paths.concatSiteJsDest = paths.webroot + "js/site.min.js";
paths.concatSiteCssDest = paths.webroot + "css/site.min.css";
paths.concatLibJsDest = paths.libroot + "lib.min.js";
paths.concatLibCssDest = paths.libroot + "lib.min.css";
paths.concatExtendedjsDest = paths.extendedroot + "extended.min.js";

gulp.task("clean:js", function () {
    return del(paths.concatSiteJsDest);
});

gulp.task("clean:css", function () {
    return del(paths.concatSiteCssDest, paths.concatLibCssDest);
});

gulp.task("scripts", ["clean:js"], function () {
    var siteScripts = gulp.src([paths.siteJs, "!" + paths.siteMinJs])
      .pipe(plumber())
      .pipe(sourcemaps.init())
      //.pipe(uglify()
      .pipe(sourcemaps.write())
      .pipe(concat(paths.concatSiteJsDest))
      .pipe(gulp.dest("."));

    var libScripts = gulp.src(paths.libJs)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      //.pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(concat(paths.concatLibJsDest))
      .pipe(gulp.dest("."));

    var extendedScripts = gulp.src([paths.extendedJs, "!" + paths.extendedMinJs])
      .pipe(plumber())
      .pipe(sourcemaps.init())
      //.pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(concat(paths.concatExtendedjsDest))
      .pipe(gulp.dest("."));

    return merge(siteScripts, libScripts, extendedScripts);
});

gulp.task("css", ["clean:css"], function () {
    var siteCss = gulp.src([paths.siteCss, "!" + paths.siteMinCss])
      .pipe(plumber())
      //.pipe(cleanCss())
      .pipe(concat(paths.concatSiteCssDest))
      .pipe(gulp.dest("."));

    var libCss = gulp.src(paths.libCss)
      .pipe(plumber())
      //.pipe(cleanCss())
      .pipe(concat(paths.concatLibCssDest))
      .pipe(gulp.dest("."));

    return merge(siteCss, libCss);
});

gulp.task("watch", function () {
    gulp.watch(paths.siteJs, ["scripts"]);
    gulp.watch(paths.extendedJs, ["scripts"]);
    gulp.watch(paths.siteCss, ["css"]);
});

gulp.task("default", ["scripts", "css"]);