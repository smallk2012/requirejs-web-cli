var gl = {
	getUrlParam: function(_key) {
		_key = _key || 'keyword';
		var reg = new RegExp("(^|&)" + _key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

		var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数

		if(r != null) return unescape(r[2]);
		return null; //返回参数值
	},
	isPc: function() {
		var el = $('#ispc');
		return el.length ? el.is(':visible') : false;
	},
	isMobile: function() {
		var sUserAgent = navigator.userAgent.toLowerCase(),
			bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
			bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
			bIsMidp = sUserAgent.match(/midp/i) == "midp",
			bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
			bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
			bIsAndroid = sUserAgent.match(/android/i) == "android",
			bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
			bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile",
			bIsWebview = sUserAgent.match(/webview/i) == "webview";
		return(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
	},
	Trim: function(str, is_global) {
		is_global = is_global || "g";
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g, "");
		if(is_global.toLowerCase() == "g") {
			result = result.replace(/\s/g, "");
		}
		return result;
	},
	log:function(obj){
		if(window.isLog){
			console.log(obj);
		}
	}
};
define([], function() {
	var app = {};
	app.init = function() {
		app.lazy();
	};
	app.lazy = function() {
		function picShow() {
			lazyImg('.lazy-img');
			lazyBg('.lazy-bg');
			if(gl.isPc()) {
				lazyImg('.lazy-img-pc');
				lazyBg('.lazy-bg-pc');
			} else {
				lazyImg('.lazy-img-phone');
				lazyBg('.lazy-bg-phone');
			}
		};

		function lazyImg(classname) {
			var scrollH = $(window).scrollTop();
			var winH = $(window).height();
			var threshold = 50; //距离位置
			for(var m = 0; m < $(classname).length; m++) {
				var ele = $(classname).eq(m);
				//可见与属性存在的时候
				if(ele.is(':visible') && ele.attr('data-src') != undefined) {
					if(ele.offset().top >= (scrollH - threshold) && ele.offset().top <= (scrollH + winH + threshold)) {
						//坐标y在窗口-threshold 和窗口+threshold位置
						ele.attr('src', ele.attr('data-src'));
						ele.removeAttr('data-src');
					} else if((ele.offset().top + ele[0].offsetHeight) >= (scrollH - threshold) && ele.offset().top <= scrollH) {
						//坐标y+高度 在窗口-threshold 和 坐标y 小于窗口位置
						ele.attr('src', ele.attr('data-src'));
						ele.removeAttr('data-src');
					}
				}
			}
		};

		function lazyBg(classname) {
			var scrollH = $(window).scrollTop();
			var winH = $(window).height();
			var threshold = 50; //距离位置
			for(var m = 0; m < $(classname).length; m++) {
				var ele = $(classname).eq(m);
				//可见与属性存在的时候
				if(ele.is(':visible') && ele.attr('data-background') != undefined) {
					if(ele.offset().top >= (scrollH - threshold) && ele.offset().top <= (scrollH + winH + threshold)) {
						//坐标y在窗口-threshold 和窗口+threshold位置
						ele.css("background-image", "url('" + ele.attr('data-background') + "')");
						ele.removeAttr('data-background');
					} else if((ele.offset().top + ele[0].offsetHeight) >= (scrollH - threshold) && ele.offset().top <= scrollH) {
						//底部往上拉
						//坐标y+高度 在窗口-threshold 和 坐标y 小于窗口位置
						ele.css("background-image", "url('" + ele.attr('data-background') + "')");
						ele.removeAttr('data-background');
					}
				}
			}
		}
		picShow();
		//屏幕滚动时
		$(window).scroll(function() {
			picShow();
		});
		//屏幕变化时
		$(window).resize(function() {
			picShow();
		});
	}
	return app;
})