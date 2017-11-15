// 载入外挂
var gulp = require('gulp'),
	path = require('path'),
	sass = require('gulp-ruby-sass'),
	less = require('gulp-less'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cleancss = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	browserSync = require('browser-sync'),
	plumber = require('gulp-plumber');
	// 获取 minify-css 模块（用于压缩 CSS）
	//minifyCSS = require('gulp-minify-css');
// 样式
gulp.task('styles-dev', function() {
	return gulp.src(['css/app/less/app.less'])
		.pipe(sourcemaps.init())
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['> 5% in CN', 'last 10 versions', 'Chrome 24'],
			cascade: true, //是否美化属性值 默认：true 像这样：
			//-webkit-transform: rotate(45deg);
			//        transform: rotate(45deg);
			remove: true //是否去掉不必要的前缀 默认：true
		}))
		// .pipe(cleancss())
		// .pipe(rename({
		// 	suffix:'.min'
		// }))
		.pipe(sourcemaps.write('./', {
			includeContent: false
		}))
		.pipe(gulp.dest('css/app/'))
		.pipe(notify(
			/*{
			            message: 'Styles task complete'
			        }*/
		))
});
// 预设任务
gulp.task('default', function() {
	// watch所有.less档，一有变动自动编译为css文件
	gulp.watch('css/**/*.less', ['styles-dev']);
	browserSync({
		server: {
			baseDir: './',
			index: "index.html"
		}
	});
	var reload = browserSync.reload;
	// watch所有位在根目录下的档案，一旦有更动，便进行重载
	var watchConfig = ['css/**/*.css', 'js/**/*', 'images/**/*', '*.html'];
	gulp.watch(watchConfig, reload);
});