import imagemin from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.newer(app.path.build.images))
		.pipe(imagemin({
			optimizationLevel: 3
		}))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.browsersync.stream());
}