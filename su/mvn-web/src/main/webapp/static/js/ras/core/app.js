/**
 * APP主页面，用来管理Page对象
 */
define(function(require, exports, module){
	
	var utils = require('ras/utils');
	
	//添加自定义的page
	var UserView = require('ras/user/userview');
	
	var App = Backbone.View.extend({
		
		initialize : function(options){
			this.relogin=true;
			utils.layout('.page-container');//设置滚动条
		},
		
		delegateEvents : function(){
			var view = this;
		},
		/*
		 * forceRefresh=true 表示需要强制刷新
		 */
		render : function(page,forceRefresh){
			//第一次初始化
			if(this.lastPage==null){
				this.lastPage = page;
			//两个不同页面，需要销毁之前页面，加载新页面
			}else if( this.lastPage.pageKey != page.pageKey || forceRefresh){
				if(this.lastPage.mainView){
					this.lastPage.mainView.remove();
				}
				this.lastPage = page;
			}else{
				this.update(page);
				return;
			}
			this.lastPage.render();
			//Event.setLastPage(this.lastPage);
			
			//$("body").trigger('rViewSlide');	//右侧视图渲染
			$(window).trigger('resize');
		},
		
		/**
		 * 更新page参数
		 */
		update:function(page){
			this.lastPage.initialize(page);
			//销毁新页面
			page.remove();
			page = null;
			
		},
		//主页
		renderHome:function(userId){
			var userPage = new UserView();
			this.render(userPage);//渲染页面
		}
	});

	module.exports = App;

});
