var gulp       	 = require('gulp'),
	sass         = require('gulp-sass'), 
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),  
	cssnano      = require('gulp-cssnano'), 
	rename       = require('gulp-rename'), 
	del          = require('del'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
		.pipe(gulp.dest('src/css')) 
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({ 
		server: { 
			baseDir: 'src' 
		},
		notify: false 
	});
});


gulp.task('css-main', ['sass'], function() {
	return gulp.src('src/css/main.css') 
		.pipe(cssnano()) 
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css')); 
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']); 
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/script/**/*.js', browserSync.reload);  
	gulp.watch('src/css/**/*.css', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('docs'); 
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*') 

		.pipe(gulp.dest('docs/img'));
});


gulp.task('build', ['clean', 'img', 'sass'], function() {

	var buildCss = gulp.src([
		'src/css/main.css'])
	.pipe(gulp.dest('docs/css'))

	var buildFonts = gulp.src('src/font/**/*')
	.pipe(gulp.dest('docs/font'))

	var buildJs = gulp.src('src/script/**/*')
	.pipe(gulp.dest('docs/script'))

	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('docs'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);