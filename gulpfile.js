var gulp   = require('gulp');
var server = require('gulp-server-livereload');
var exec   = require('child_process').exec;

gulp.task('default',   ['gendoc']);

gulp.task('gendoc', function () {
	gulp.watch('*.py', function () {
		console.log('Regen DOC')
		exec('python adoc.py', function(e,s,se) {
			console.log(e);
		})
	});
});