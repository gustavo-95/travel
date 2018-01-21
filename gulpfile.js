var gulp = require("gulp"),
watch = require("gulp-watch");

gulp.task("default", () => {
	console.log("Task de Gulp creada");
});

gulp.task("html", () => {
	console.log("Algo util en HTML");
});

gulp.task("styles", () => {
	console.log("Algo util con CSS");
});

gulp.task("watch", () => {
	watch("./app/index.html", () => {
		gulp.start("html");
	});

	watch("./app/assets/styles/**/*.css", () => {
		gulp.start("styles");
	});
});