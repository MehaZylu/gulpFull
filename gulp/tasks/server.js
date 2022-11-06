export const server = (done) => {
	app.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`
		}
	})
}