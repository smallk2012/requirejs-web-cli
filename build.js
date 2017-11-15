({
	appDir: './',
	baseUrl: './js',
	dir: './dist',
	modules: [{
		name: 'main'
	}],
	fileExclusionRegExp: /^(r|build)\.js$/,
	optimizeCss: 'none',
	removeCombined: true,
	paths: {
		jquery: 'lib/jquery.1.11.3.min',
		swiper: 'lib/swiper.jquery.min',
		dotdotdot: 'lib/jquery.dotdotdot.min',
		numani: 'lib/number'
	},
	shim: {
		swiper: {
			deps: ['jquery']
		},
		dotdotdot: {
			deps: ['jquery']
		},
		numani: {
			deps: ['jquery']
		}
	}
})