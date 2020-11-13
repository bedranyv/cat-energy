var gulp = require('gulp'); // подключаем Gulp (require указывает, что надо проверить папку node_modules и найти там папку gulp.)
var sass = require('gulp-sass'); // подключаем плагин Sass
var plumber = require('gulp-plumber'); // подключаем плагин бесперебойного компилирования в случае ошибки в коде. При ошибке в препроцессорном коде код компилируется и выводит сообщение об ошибке. Без этого плагина компилирование останавливается.
var postcss = require('gulp-postcss'); // нужен для запуска плагина autoprefixer
var autoprefixer = require('autoprefixer'); // подключаем плагин Autoprefixer для расстановки префиксов к css свойствам для поддержки браузеров. 
var browserSync = require('browser-sync').create(); // подключаем плагин для автоматической перезагрузки страницы в браузере после компилирования кода и создаем локальный сервер (.create())
var cssmin = require('gulp-csso'); // подключаем плагин минификации css кода
var rename = require('gulp-rename'); // подключаем плагин, для возможности переименовать выходящий файл (для mincss)
var imagemin = require('gulp-imagemin'); // подключаем плагин минификации изображений
var webp = require('gulp-webp'); // подключаем плагин для создания WebP изображений


sass.compiler = require('node-sass');
 
gulp.task('sass', function () { // task-name (sass) ссылается на имя задачи, используемое для запуска задачи в консоли. Для запуска необходимо ввести в командной строке "gulp sass"
  return gulp.src('./source/**/*.scss') // путь к файлам-исходникам
    .pipe(plumber()) // запуск плагина, который не останавливает компиляцию в случае возникновения ошибки
    .pipe(sass().on('error', sass.logError)) // запуск плагина комплиляции SCSS в CSS (.on(‘error’, sass.logError) означает что, если есть ошибки, то вывести их в консоль.)
    .pipe(postcss([autoprefixer()])) // запуск плагина для расстановки прификсов
    .pipe(gulp.dest('./docs/css')) // путь к папке, куда помещаем конечные файлы
    .pipe(browserSync.stream()); // запуск плагина, который перерисовывает страницу (stream) в браузере в случае изменений в коде
});
 

gulp.task('watch', function () {
	
	browserSync.init({
		server: './docs/' //  запускаем сервер, указываем где находится корень сайта (где находится index.html)
	});

  gulp.watch('./source/**/*.scss', gulp.series('sass')); // запуск watch, который отслеживает изменения в *.scss и в случае изменений запускает задачу sass, которая компилирует css. Чтобы остановить watch используйте сочетание клавиш Ctrl + C.
  gulp.watch('./docs/*.html').on('change', browserSync.reload); // запуск watch, который отслеживает изменения в *.html файлах и в случае изменений перезагружкает страницу (reload)
});


// задача для запуска минификации css файла
gulp.task('cssmin', function () {
	return gulp.src('./docs/css/*.css')
	.pipe(cssmin())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('./docs/css'))
});

// задача для запуска минификации изображений
gulp.task('imagemin', function () {
	return gulp.src('./docs/img/**/*.{png,jpg,svg}')
	.pipe(imagemin([
		imagemin.optipng({optimizationLevel: 3}),
		imagemin.mozjpeg({progressive: true}),
		imagemin.svgo()
	]))

	.pipe(gulp.dest('./docs/img'))
});

// задача для запуска создания webp изображений
gulp.task('webp', function () {
	return gulp.src('./docs/img/**/*.{png,jpg}')
	.pipe(webp({quality: 90}))
	.pipe(gulp.dest('./docs/img'))
});

// задача для запуска создания webp изображений в папке img-to-webp
gulp.task('img-to-webp', function () {
	return gulp.src('./img-to-webp/**/*.{png,jpg}')
	.pipe(webp({quality: 90}))
	.pipe(gulp.dest('./img-to-webp/'))
});