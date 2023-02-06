let project_folder = require("path").basename(__dirname);
let source_folder = "#src";

let path = {
    build: {
        html: project_folder + "/",
        pug: project_folder + "/",
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
        pug: source_folder + "/*.pug",
        css: [
            source_folder + "/scss/*.scss", "!" + source_folder + "/_*.scss"
        ],
        js: [
            source_folder + "/js/*.js", '!' + source_folder + "/js/_*.js",
        ],
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/**/*.*",
        video: source_folder + "/video/*.mp4",
        libs: source_folder + "/libs/**/*.*",
    },
    watch: {
        html: source_folder + "/**/*.html",
        pug: source_folder + "/**/*.pug",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        libs: source_folder + "/libs/**/*.*",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp');
let gulp = require('gulp');
let browsersync = require("browser-sync").create();
let fileinclude = require("gulp-file-include");
let pug = require('gulp-pug');
let del = require("del");
let scss = require('gulp-sass')(require('sass'));
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin'); // Сжатие картинок
let webp = require('gulp-webp');
let webphtml = require('gulp-webp-html');
let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');
let fonter = require('gulp-fonter');
let fs = require('fs');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify'); // Для сжатия js файла 
let removeHtmlComments = require('gulp-remove-html-comments'); // Удаляем комментарий в html
let rename = require("gulp-rename");
let gcmq = require('gulp-group-css-media-queries'); // Фильтруем Медизапросы
let cssnano = require('gulp-cssnano'); // Сжатие CSS файла

function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3038,
        notify: false
    })
}
function html() {
    return src(path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(webphtml())
        .pipe(removeHtmlComments())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}
function pug_fun() {
    return src(path.src.pug)
        .pipe(pug({
            pretty: true
        }
        ))
        .pipe(dest(path.build.pug))
        .pipe(browsersync.stream())
}
function css() {
    return src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(scss.sync({ outputStyle: 'compressed' }))
        // .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(gcmq())
        // .pipe(sourcemaps.write())
        .pipe(cssnano()) // Сжимаем CSS
        .pipe(rename({  // Переименовываем CSS файл 
            extname: ".min.css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}
function js() {
    return src(path.src.js)
        // .pipe(sourcemaps.init())
        .pipe(fileinclude())
        // .pipe(uglify())  Сжимаем JS файл
        // .pipe(sourcemaps.write())
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}
function video() {
    return src(path.src.video)
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
        .pipe(webp({
            quality: 80
        }))
        .pipe(
            dest(path.build.img)
        )
        .pipe(
            src(path.src.img)
        )
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
function fonts() {
    return src(path.src.fonts)
        // .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    // return src(path.src.fonts)
    //     .pipe(ttf2woff2())
    //     .pipe(dest(path.build.fonts))

}
gulp.task('otf2ttf', function () {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'))

})
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.pug], pug_fun);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}
function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(html, js, css, pug_fun, images, fonts, video, libs));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.libs = libs;
exports.video = video;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.pug = pug;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;