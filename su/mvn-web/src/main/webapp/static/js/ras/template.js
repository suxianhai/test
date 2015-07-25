/**
 * 模版集中定义，部署后将一次性把所有模版全部加载进来
 */
define(function(require, exports, module) {
	var templates = {
		//静态html模板	
		'user.userpage'			: require('tpl/user/user.tpl'),
		'user.userpage2'		: '<p class="user"><span><%=name%></span></p>'
	};
	module.exports = templates;
});
