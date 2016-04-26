var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var watch = require('gulp-watch');


/************Main Task***********/
gulp.task('default', []);

/************Individual Tasks*******************/
gulp.task('hello', function(){
	console.log("Hey there Gulp is running!!");
})

/* Launch WebServer */
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

/* Convert sass files to css */
gulp.task('sass-css', function(){ 
	return gulp.src('styles/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
		.pipe(sass()) 												 
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

/* Concatenating and minifying using the build-endbuild in index */
gulp.task('useref', function(){
  return gulp.src('./index.html')
    .pipe(useref())
    // minifies only if it's a js file
    .pipe(gulpif('*.js', uglify()))
    // minifies only if it's a js file
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulp.dest('build'))
});

/* Watch for file changes */
gulp.task('watch', ['browserSync', 'sass-css'], function() {	
	gulp.watch('styles/scss/**/*.scss', ['sass-css']); // use once SASS is included
	gulp.watch('styles/css/**/*.css', browserSync.reload);	// watch CSS 
	gulp.watch('scripts/**/*.js', browserSync.reload);	// watch js
	gulp.watch('templates/**/*.html', browserSync.reload); // watch templates
	gulp.watch('./index.html', browserSync.reload); // watch main page
});