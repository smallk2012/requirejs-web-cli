define([], function() {
	var app = {};
	app.init = function() {
		//本地预览会自己的加载头部底部
		if(isDebug){
			$(".footer").load("底部.html",function(){
				var el = $(this).find('.footer');
				el.insertAfter($(this));
				$(this).remove();
			});
		}
		else{
			
		}
	}
	return app;
})