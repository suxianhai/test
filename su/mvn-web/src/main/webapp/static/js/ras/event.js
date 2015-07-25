define(function(require, exports, module){
	var utils = require('ras/utils');
	
	var relogin=true;
	var lastPage = {};
	var EVENT =  {
		setLastPage:function(page){
			lastPage = page;
		},
		initEvent:function(){
			var view = this;
			
			utils.layout('.page-container');//设置滚动条
			
			//窗口改变事件
			$(window).on('resize',function(event){
				setTimeout(function(){
					$('body div.scrollwrapper').each(function(event){
						$(this).trigger('resizeSroll',event);
					})},100);
			});
			
			$('body').off('resizeSroll').on('resizeSroll' ,'div.scrollwrapper',function(event){
				var $this = $(this);
				if($this.attr('horizontal')){
					var width = $(window).width();
					var left = $this.offset().left;
					$this.css('width',width - left);
				}else{
					var height = $this.attr('height');
					if(!height){
						var marginbottom = $this.attr('marginbottom') || 0;
						var top = $this.offset().top;
						height = $(window).height()- top - marginbottom;
					}
					$this.css('height',height);
				}
				$this.mCustomScrollbar("update");
			});
		}
	};
	module.exports = EVENT;
});
