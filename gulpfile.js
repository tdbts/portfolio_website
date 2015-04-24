var gulp = require('gulp'), 
	jshint = require('gulp-jshint'), 
	nodemon = require('gulp-nodemon'), 
	notify = require('gulp-notify'), 
	stylish = require('jshint-stylish'), 
	source = require('vinyl-source-stream'), 
	browserify = require('browserify'), 
	react = require('gulp-react');

gulp.task('transform', function () {
	gulp.src(['public/components/*.jsx'])
		.pipe(react())
		.on('error', console.log.bind(console))
		.pipe(gulp.dest('public/javascripts'));

	console.log("TRANSFORM OF .jsx FILES COMPLETE.");	
});

gulp.task('browserify', function () {
	console.log("BUNDLING FILES WITH BROWSERIFY.");

	return browserify('./public/javascripts/index.js')
		.bundle()
		.on('error', function () {
			notify.onError({
				message: "<%= error.message %>"
			}).apply(this, arguments);

			this.emit('end');
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./public/dist'));
});

gulp.task('jshint', function () {
	gulp.src([
		'src/*.js', 
		'routes/*.js', 
		'public/javascripts/*.js', 
		'gulpfile.js'
		])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
}); 

gulp.task('watch', function () {
	var sourcefiles = [
		'src/*.js', 
		'routes/*.js', 
		'gulpfile.js'
	];

	gulp.watch(sourcefiles, ['jshint']);

	gulp.watch('public/components/*.jsx', ['transform', 'browserify']);
});

gulp.task('server-restart', function () {
	nodemon({
		script: './bin/www', 
		ext: 'js jsx html json', 
		env: {
			'NODE_ENV': 'development'
		}
	})
	.on('restart', function () {
		var date = new Date(), 
			hour = date.getHours(), 
			minutes = date.getMinutes(), 
			seconds = date.getSeconds();

		console.log("Change detected.  Restarted server at " + hour + ":" + minutes + ":" + seconds + ".");		
	});
});

gulp.task('default', ['watch']);
gulp.task('build', ['jshint', 'transform', 'browserify', 'server-restart']);