import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss)
		.pipe(sass())
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.browsersync.stream());
}