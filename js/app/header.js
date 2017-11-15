define([], function() {
	var app = {};
	app.init = function() {
		//本地预览会自己的加载头部
		if(isDebug) {
			$(".header").load("头部.html", function() {
				var el = $(this).find('.header');
				el.insertBefore($(this));
				$(this).remove();
				app.setActive(gl.getUrlParam('pagename'))
				app.navFun();
			});
		} else {
			app.navFun();
		}
	};
	app.setActive = function(pagename){
		console.log('设置焦点' + pagename);
	};
	/*头部事件
	 * 
	 */
	app.navFun = function() {
		$('.nav-pc .nav-item').hover(function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('.dimed').removeClass('hover');
			} else {
				$(this).addClass('hover');
				$('.nav-pc .nav-item.active').addClass('dimed');
			}
		}, function() {
			$(this).removeClass('hover');
			$('.nav-pc .nav-item.active').removeClass('dimed');
		});
		$('.nav-pc .subnav-item').hover(function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('.dimed').removeClass('hover');
			} else {
				$(this).addClass('hover');
				$('.nav-pc .subnav-item.active').addClass('dimed');
			}
		}, function() {
			$(this).removeClass('hover');
			$('.nav-pc .subnav-item.active').removeClass('dimed');
		});
	}
	return app;
})