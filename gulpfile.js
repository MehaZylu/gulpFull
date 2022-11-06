import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import browsersync from "browser-sync";
import newer from "gulp-newer";

global.app = {
	path: path,
	gulp: gulp,
	browsersync: browsersync,
	newer: newer,
}

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { images } from "./gulp/tasks/images.js";

function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(html, scss, images);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task('default', dev);