
define(function(require, exports, module) {

	var App = require('ras/core/app');
	var AppRouter = Backbone.Router.extend({
		//初始化
		initialize : function(options) {
			this.app = new App();
		},

		routes : {
			""								: "home",				//用户首页（门户）
			"home"							: "home",				//用户首页（门户）
			"home/:userId" 					: "home"				//指定用户的首页
		},
		
		home : function(userId){
			this.app.renderHome(userId);
		}
	});

	module.exports = AppRouter;
});
