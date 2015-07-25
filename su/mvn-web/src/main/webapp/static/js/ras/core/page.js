/**
 * 主页面Page对象，用来管理内部的view对象
 */
define(function(require,exports,module){
 
	var utils = require('ras/utils');

	var Page = Backbone.View.extend({

		initialize : function(options) {
			this.el = '#container';
		},

		/**
		 * 渲染page，子类需要覆盖该方法
		 */
		render : function(){
			console.error('you need to rewrite the method : render');
		},

		/**
		 * page父类的render方法
		 */
		_render : function(activeEl){
			if(activeEl){	//如果有值,给元素选中状态
				$(activeEl).parents("aside.aside").find(".active").removeClass("active");
				$(activeEl).addClass("active");
			}
			this.mainView.render();
		},

		remove : function(){
			this.off();
			this.undelegateEvents();
			
			if(this.mainView){
				this.mainView.off();
				this.mainView.remove();
				this.mainView = null;
			}
		}

	});

	module.exports = Page;

});
