var gulp = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream');

gulp.task('js-build', function () {
	return gulp.src('./src/js/hs-quantity-counter.js')
		.pipe(webpackStream({
			mode: 'development',
			output: {
				library: 'HSQuantityCounter',
				libraryTarget: 'umd',
				libraryExport: 'default',
				filename: 'hs-quantity-counter.js',
			},
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			}
		}))
		.pipe(gulp.dest('./dist-front/'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist-front/'))
});

gulp.task('main-watch', function () {
	gulp.watch('./src/js/hs-quantity-counter.js', gulp.series('js-build'));
});

// Default Task
gulp.task('default', gulp.series('main-watch'));
