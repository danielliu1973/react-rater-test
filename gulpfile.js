var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('js', function() {
	var b = browserify();
	b.add('./app.jsx');
	b.transform(babelify);
	b.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./'));
});
