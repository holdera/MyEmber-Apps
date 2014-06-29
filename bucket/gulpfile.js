var gulp = require('gulp'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
jade = require('gulp-jade'),
livereload = require('gulp-livereload'),
watch = require('gulp-watch');
browserSync = require('browser-sync');

gulp.task('default', ['sass', 'browser-sync'], function(){
	gulp.watch('css/*.scss', ['sass'])
});

gulp.task('browser-sync', function(){
	browserSync.init(['css/*.css', 'js/*.js'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('sass', function(){
	gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

gulp.task('yeah', function(){
	//defines our task
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build'))
})

gulp.task('jade', function(){
	gulp.src('templates/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('views'))
});
