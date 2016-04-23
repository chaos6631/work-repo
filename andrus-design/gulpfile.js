var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass-css', function(){
	// convert sass files to css
	return gulp.src('app/styles/scss/main.scss').pipe(sass()).pipe(gulp.dest('app/styles/css'))

});

gulp.task('concat', function(){
	// concat modules into one module

})

gulp.task('min', function(){
	// minify all js and css files to one file
})