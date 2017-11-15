/**
<div class="jpaginate">
	<ul>
		<li class="jpaginate-prev dimed"><span class="iconfont icon-jiantou1"></span></li>
		<li class="jpaginate-page active">1</li>
		<li class="jpaginate-page">2</li>
		<li class="jpaginate-page">3</li>
		<li class="jpaginate-page dimed">...</li>
		<li class="jpaginate-next"><span class="iconfont icon-jiantou"></span></li>
	</ul>
	<p class="jpaginate-more loading"><i class="iconfont icon-jiazhai"></i><span>正在加载</span></p>
</div>
 */
define(['jquery'], function() {
	var app = {};
	app.callback = null;

	app.pageIndex = 1;
	app.pageTotal = 1;
	app.sIndex = 1;
	app.isLoading = false;
	app.init = function(callback) {
		app.callback = callback;
		//上一页事件
		$(".jpaginate").on('click', '.jpaginate-prev', function() {
			if(app.pageIndex > 1 && !app.isLoading) {
				app.isLoading = true;
				app.pageIndex--;
				$('.jpaginate .jpaginate-more').addClass('loading');
				$('.jpaginate .jpaginate-more span').html('正在加载');
				app.callback && app.callback(app.pageIndex);
			}
		});
		//下一页事件
		$(".jpaginate").on('click', '.jpaginate-next', function() {
			if(app.pageIndex < app.pageTotal && !app.isLoading) {
				app.pageIndex++;
				app.loadEvent(app.pageIndex);
			}
		});
		//页码事件
		$(".jpaginate").on("click", '.jpaginate-page', function() {
			if(!$(this).hasClass('active') && !$(this).hasClass('dimed') && !app.isLoading) {
				var pageIndex = parseInt($(this).html());
				app.loadEvent(pageIndex);
			}
		})

		$(window).resize(function() {
			app.scrollEvent();
		});
		$(window).scroll(function() {
			app.scrollEvent();
		});
	};
	/**
	 * 滚动刷新数据
	 */
	app.scrollEvent = function() {
		var $this = $(window),
			viewH = $(window).height(), //可见高度
			contentH = $('body').get(0).scrollHeight, //内容高度
			scrollTop = $(window).scrollTop(); //滚动高度
		if(contentH - viewH - scrollTop <= (50 +  $('.footer').height()) && !gl.isPc() && !app.isLoading) { //到达底部100px时,加载新内容
		//if(scrollTop / (contentH - viewH) >= 0.95 && !gl.isPc() && !app.isLoading) {
			//到达底部100px时,加载新内容
			if(app.pageIndex < app.pageTotal) {
				app.pageIndex++;
				app.loadEvent(app.pageIndex);
			}
		}
	};
	/**
	 * 加载时设置
	 * @param {Object} pageindex 页码
	 */
	app.loadEvent = function(pageindex) {
		app.isLoading = true;
		$('.jpaginate .jpaginate-more').addClass('loading');
		$('.jpaginate .jpaginate-more span').html('正在加载');
		app.callback && app.callback(pageindex);
	};
	/**
	 * 分页插件
	 * @param {Object} pageindex 获取页码
	 * @param {Object} pagetotal 总页数
	 */
	app.jPaginate = function(pageindex, pagetotal) {
		app.pageIndex = pageindex;
		app.pageTotal = pagetotal;
		
		var m = 1;
		var li = '';
		if(pagetotal <= 1) {
			$('.jpaginate').addClass('hidden');
		} else {
			$('.jpaginate').removeClass('hidden');
		}
		$('.jpaginate .jpaginate-more').removeClass('loading');
		if(pageindex == pagetotal) {
			$('.jpaginate .jpaginate-more span').html('已经到底了');
		} else {
			$('.jpaginate .jpaginate-more span').html('上拉刷新');
		}
		if(pagetotal <= 8) {
			li += '<li class="jpaginate-prev ' + (pageindex == 1 ? 'dimed' : '') + '"><span class="iconfont icon-jiantou1"></span></li>';
			for(m = 1; m <= pagetotal; m++) {
				li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
			}
			li += '<li class="jpaginate-next ' + (pageindex == pagetotal ? 'dimed' : '') + '"><span class="iconfont icon-jiantou"></span></li>';
			$('.jpaginate ul').html(li);
		} else {
			if(pageindex - 3 >= app.sIndex) {
				li += '<li class="jpaginate-prev ' + (pageindex == 1 ? 'dimed' : '') + '"><span class="iconfont icon-jiantou1"></span></li>';
				if(pageindex + 3 >= pagetotal - 2) {
					for(m = 1; m <= 2; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					li += '<li class="jpaginate-page dimed">…</li>';
					for(m = pagetotal - 5; m <= pagetotal; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					app.sIndex = 1;
				} else {
					for(m = pageindex; m <= pageindex + 3; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					li += '<li class="jpaginate-page dimed">…</li>';
					for(m = pagetotal - 2; m <= pagetotal; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					app.sIndex = pageindex;
				}
				li += '<li class="jpaginate-next ' + (pageindex == pagetotal ? 'dimed' : '') + '"><span class="iconfont icon-jiantou"></span></li>';
				$('.jpaginate ul').html(li);
			} else {
				if(app.sIndex == pageindex) {
					app.sIndex = pageindex - 3 > 1 ? pageindex - 3 : 1;
					li += '<li class="jpaginate-prev ' + (pageindex == 1 ? 'dimed' : '') + '"><span class="iconfont icon-jiantou1"></span></li>';
					for(m = app.sIndex; m <= app.sIndex + 3; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					li += '<li class="jpaginate-page dimed">…</li>';
					for(m = pagetotal - 2; m <= pagetotal; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					li += '<li class="jpaginate-next ' + (pageindex == pagetotal ? 'dimed' : '') + '"><span class="iconfont icon-jiantou"></span></li>';
					$('.jpaginate ul').html(li);
					app.sIndex = pageindex;
				} else if(pageindex == app.sIndex - 1) {
					app.sIndex = pageindex - 3 > 1 ? pageindex - 3 : 1;
					li += '<li class="jpaginate-prev ' + (pageindex == 1 ? 'dimed' : '') + '"><span class="iconfont icon-jiantou1"></span></li>';
					for(m = app.sIndex; m <= app.sIndex + 3; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					li += '<li class="jpaginate-page dimed">…</li>';
					for(m = pagetotal - 2; m <= pagetotal; m++) {
						li += '<li class="jpaginate-page ' + (pageindex == m ? "active" : "") + '">' + m + '</li>'
					}
					li += '<li class="jpaginate-next ' + (pageindex == pagetotal ? 'dimed' : '') + '"><span class="iconfont icon-jiantou"></span></li>';
					$('.jpaginate ul').html(li);
					app.sIndex = pageindex;
				} else {
					if(pageindex == pagetotal) {
						$('.jpaginate-next').addClass('dimed');
					} else {
						$('.jpaginate-next').removeClass('dimed');
					}
					if(pageindex == 1) {
						$('.jpaginate-prev').addClass('dimed');
					} else {
						$('.jpaginate-prev').removeClass('dimed');
					}
					$('.jpaginate .jpaginate-page').removeClass('active');
					for(m = 0; m < $('.jpaginate ul li').length; m++) {
						var pnum = parseInt($('.jpaginate ul li').eq(m).html());
						if(pnum == pageindex) {
							$('.jpaginate ul li').eq(m).addClass('active');
							break;
						}
					}
				}
			}
		}
	};
	return app;
})