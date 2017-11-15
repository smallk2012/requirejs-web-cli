var js_app_dir = window.js_app_dir == undefined ? 'app/' : '';
var js_lib_dir = window.js_lib_dir == undefined ? 'lib/' : '';
var isDebug = window.isDebug == undefined ? true : window.isDebug;
require.config({
	waitSeconds: 0,
	paths: {
		jquery: js_lib_dir + 'jquery.1.11.3.min',
		swiper: js_lib_dir + 'swiper.jquery.min',
		dotdotdot: js_lib_dir + 'jquery.dotdotdot.min',
		numani: js_lib_dir + 'number',
		common: js_app_dir + 'common',
		jpaginate: js_lib_dir + 'jpaginate'
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
		},
		common: {
			deps: ['jquery']
		},
		jpaginate: {
			deps: ['jquery']
		}
	}
});
require(['common'], function(c) {
	$(function() {
		c.init();
		//模块加载需求js
		var codeAr = $('[data-code]');
		if(codeAr.length) {
			for(var i = 0; i < codeAr.length; i++) {
				var js = codeAr.eq(i).attr('data-code');
				require([js_app_dir + js], function(app) {
					app.init();
				});
			}
		}
	});
});
