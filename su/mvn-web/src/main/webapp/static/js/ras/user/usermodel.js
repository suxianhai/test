define(function(require, exports, module){

	var UserModel = Backbone.Model.extend({
		pageNo:1,
		pageSize:10,
		initialize : function(options){
			this.options = options||{};
//			this.beginDate = Date.create().beginningOfMonth().format('{yyyy}-{MM}-{dd}');
//			this.endDate = Date.create().endOfMonth().format('{yyyy}-{MM}-{dd}');
		},
		/**
		 * 查询用户信息
		 * @param callback
		 */
		search : function(param, callback) {
			$.ajax({
				type : 'post',
				url : '/user/index.json',
				dataType : 'json',
				data : param,
				success : function(data) {
					if (callback)
						callback(data);
				}
			});
		}
	});
	module.exports = UserModel;
})
