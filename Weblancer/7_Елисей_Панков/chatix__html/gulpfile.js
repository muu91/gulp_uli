let project_folder = require("path").basename(__dirname);
let source_folder = "#src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
        video: project_folder + "/video/",
        libs: project_folder + "/libs/",
    },
    src: {
        html: [
            source_folder + "/*.html",
            "!" + source_folder + "/_*.html"
        ],
        css: [
            source_folder + "/scss/*.scss", "!" + source_folder + "/_*.scss"
        ],
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.{ttf,otf}",
        video: source_folder + "/video/*.mp4",
        libs: source_folder + "/libs/**/*.{css,js}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        libs: source_folder + "/libs/**/*.{css,js}",

    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp');
let gulp = require('gulp');
let browsersync = require("browser-sync").create();
let fileinclude = require("gulp-file-include");
let del = require("del");
let scss = require("gulp-sass");
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');
// let webp = require('gulp-webp');
// let webphtml = require('gulp-webp-html');
let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');
let fonter = require('gulp-fonter');
let fs = require('fs');




function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3113,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        //   .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css) //.autoprefixer  для автопрефиксов
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function video() {
    return src(path.src.video)
        .pipe(fileinclude())
        .pipe(dest(path.build.video))
        .pipe(browsersync.stream())
}

function libs() {
    return src(path.src.libs)
        .pipe(fileinclude())
        .pipe(dest(path.build.libs))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        //   .pipe(webp({
        //       quality: 70
        //   }))
        //   .pipe(
        //       dest(path.build.img)
        //   )
        //   .pipe(
        //       src(path.src.img)
        //   )
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts(params) {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))

}

gulp.task('otf2ttf', function () {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'))

})


function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, video, libs));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.libs = libs;

exports.video = video;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;