const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/images/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/images/**/*.{jpg, png}`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		images: `${buildFolder}/images/**/*.{jpg, png}`,
	},
	clean: buildFolder,
}