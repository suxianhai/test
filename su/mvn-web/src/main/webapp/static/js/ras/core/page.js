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
		 * 渲染子页面，子类需要覆盖该方法
		 */
		renderSubview : function(){
			console.error('you need to rewrite the method : renderSubview');
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
			this.renderSubview();
		},

		/**
		 * page父类的renderSubview方法
		 */
		_renderSubview : function(){
			var page = this;
			this.mainView['subView'] = this.subView;
			if(this.subView){
				this.subView.on('all', function(eventName,args){
					page.trigger(eventName, args);
				});
				this.subView.render();
			}
		},

		remove : function(){
			this.off();
			this.undelegateEvents();
			if(this.subView){
				this.subView.off();
				this.subView.remove();
				this.subView = null;
			}

			if(this.mainView){
				this.mainView.off();
				this.mainView.remove();
				this.mainView = null;
			}
		}

	});

	module.exports = Page;

});
