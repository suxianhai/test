/**
 * 显示用户信息demo
 */
define(function(require, exports, module) {

	var utils = require('ras/utils');
	var UserModel = require('ras/user/usermodel');
	var UserView = Backbone.View.extend({
		
		initialize : function(options) {
			this.el  = '#mainContainer';
			this.$el  = $(this.el);
			this.tpl = utils.template('user.userpage',{'name':"传递json数组参数到模板页"});
			this.$el.html(this.tpl);
			
			this.model = new UserModel(options);
			//this.initComponents();
			
			utils.layout('#testDiv');//设置滚动条
		},
		/**
		 * 初始化公共或其他模块的控件；
		 * 日期控件
		 */
		initComponents : function() {
			var view = this;
			var model = view.model;
			
			utils.datepicker([{
				el : '#begin-date',
				callback : function(event) {
					var newBeginDate = event.date.format('{yyyy}-{MM}-{dd}');;
					var endDate = model.endDate;
					if(view.isBefore(newBeginDate, endDate)) {
						model.beginDate = newBeginDate || model.beginDate;
					} else {
						event.target.value = null;
					}
				},
				startDate : Date.create().addMonths(-6).format('{yyyy}-{MM}-{dd}'),
				endDate : Date.create().format('{yyyy}-{MM}-{dd}')
			}, {
				el :'#end-date',
				callback : function(event) {
					var newEndDate = event.date.format('{yyyy}-{MM}-{dd}');
					var beginDate = model.beginDate;
					if(view.isBefore(beginDate, newEndDate)) {
						model.endDate = newEndDate || model.endDate;
					} else {
						event.target.value = null;
					}
				},
				startDate : Date.create().addMonths(-6).format('{yyyy}-{MM}-{dd}'),
				endDate : Date.create().format('{yyyy}-{MM}-{dd}')
			}]);
			
			view.$el.find('#begin-date').val(model.beginDate);
			view.$el.find('#end-date').val(model.endDate);
			view.$el.find('[data="thisMonth"]').addClass("btn-success");
		},
		/**
		 * 判断两个日期，第一个是否 <= 第二个； 如果两个参数有一个无效，则返回true；
		 * 
		 * @param beginDate
		 * @param endDate
		 */
		isBefore : function(beginDate, endDate) {
			if(beginDate && endDate) {
				if(Date.create(beginDate).isBefore(endDate, 1000 * 60 * 60 *24)) {
					return true;
				} else {
					utils.notify('请确认输入的起始日在到期日之前');
					return false;
				}
			} else {
				return true;
			}
		}, 
		delegateEvents:function(){
			var view = this;
			var model = this.model;
			
			/**
			 * 回到顶部
			 */
			$('body').off('click.formloglist', '.goto-top').on('click.formloglist', '.goto-top', function(event){
				utils.gotoTop();
			});
			
			
			
			
			// 时间选择
			view.$el.on('click.formloglist', '.j_time a', function(event) {
				var $this = $(event.target);
				
				var time = $this.attr('data');
				switch(time) {
					case 'thisWeek' : {
						model.beginDate = Date.create().beginningOfWeek().format('{yyyy}-{MM}-{dd}');
						model.endDate = Date.create().endOfWeek().format('{yyyy}-{MM}-{dd}');
						break;	
					}
					case 'last2weeks' : {
						model.beginDate = Date.create().beginningOfWeek().addDays(-7).format('{yyyy}-{MM}-{dd}');
						model.endDate = Date.create().endOfWeek().format('{yyyy}-{MM}-{dd}');
						break;	
					}
					case 'thisMonth' : {
						model.beginDate = Date.create().beginningOfMonth().format('{yyyy}-{MM}-{dd}');
						model.endDate = Date.create().endOfMonth().format('{yyyy}-{MM}-{dd}');
						break;	
					}
					case 'lastMonth' : {
						model.beginDate = Date.create().addMonths(-1).beginningOfMonth().format('{yyyy}-{MM}-{dd}');
						model.endDate = Date.create().addMonths(-1).endOfMonth().format('{yyyy}-{MM}-{dd}');
						break;	
					}
				}
				
				view.$el.find('#begin-date').val(model.beginDate);
				view.$el.find('#end-date').val(model.endDate);
				view.$el.find('.j_time .btn').removeClass("btn-success");
				$(this).addClass("btn-success");
			});
		},
	
		//渲染用户demo页面
		render : function(){
			utils.confirm("你大爷",function(flag){
				if(flag){
					utils.notify('11');
					utils.alert(222);
				}
			});
			
			
		}
	});

	module.exports = UserView;
})
