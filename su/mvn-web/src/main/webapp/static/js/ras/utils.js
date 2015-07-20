/**
 * 系统帮助类函数
 */
define(function(require, exports, module) {
	
	var templates = require('ras/template');

	var datepickerHelper = {
		defaults : {
			el : 'input.datepicker',
			callback : function(e) {},
			eventType:"focusin.datePicker"
		},
		init : function(options) {
			var optionsArray = [];
			if($.isArray(options)){
				optionsArray = options;
			}else{
				optionsArray.push(options);
			}
			for (var i=0; i<optionsArray.length; i++){
				var options = optionsArray[i];
				//只传了一个function参数时
				if($.isFunction(options)){
					var fn = options;
					options = {};
					options.callback = fn;
				}
				options = $.extend(true, {}, this.defaults, options);
				(function(options){
					var $el = $(options.el);
					var format = $el.attr('format')||'yyyy-mm-dd';
					/*
					 * 0 or 'hour' for the hour view
					 * 1 or 'day' for the day view
					 * 2 or 'month' for month view (the default)
					 */
					var startView = $el.attr('startView')||'month';
					var minView = $el.attr('minView')||'month';
					var maxView = $el.attr('maxView')||'decade';
					var position = $el.attr('position')||'bottom-right';
					var dateGroup = $el.attr('dateGroup');
					var writeValue = $el.attr('writeValue');
					var insertAfter = $el.attr('insertAfter');
					var startDate = options.startDate || null;
					var endDate = options.endDate || null;
					var callback = options.callback;
					
					$el.each(function(){
						var $this = $(this);
						$this.on('focusin.datePicker',function(){
							$this.datetimepicker({
								format:format,
						        language:  'zh-CN',
								todayHighlight:true,
								todayBtn:dateGroup,
								autoclose: true,
								initialDate:new Date(),
								startView:startView,
								minView:minView,
								maxView:maxView,
								pickerPosition:position,
						        showMeridian: false,
						        writeValue:writeValue,
						        startDate : startDate,
						        endDate : endDate
						    }).on('show', function() {
						    	if (insertAfter) { // 解决由mouseenter触发展现的div中datepick的dom位置带来的问题
									if (!$this.attr('relocated')) {
										$this.data('datetimepicker').picker
												.insertAfter($this)
												.css('position', 'fixed');
										$this.attr('relocated', true);
									}
								}
						    });
							$this.datetimepicker('show');
							$this.off('focusin.datePicker');
						}).on('changeDate', function(ev){
					    	callback(ev);
					    });
					});
				})(options);
			}
		},
		remove:function(els){
			if(!arguments)	return;
			
			for(var i=0;i<arguments.length;i++){
				var el = arguments[i];
				$(el).datetimepicker('remove');
			}
		}
	};
	
	var layoutHelper = {
		/**
		 * 设置布局:1.设置高度；2.设置滚动条; 3. 添加固定事件
		 * @param key 页面区域标识,key值不可重复,具体key值定义请参考layout.getConfig()
		 */
		setLayout : function(targetEl, callbacks) {
			//设置不需要滚动条的页面
			/*if(targetEl.indexOf("#print") == 0){
				$(targetEl).removeClass("scrollwrapper");//打印页面不需要滚动条
				return;
			}*/
			var obj = $(targetEl);
			if(!obj) return;
			var height = obj.attr('height');
			if(!height){
				var marginbottom = obj.attr('marginbottom') || 0;
				var top = obj.offset().top;
				height = $(window).height()- top - marginbottom;
			}
			obj.css('height',height);
			
			var theTheme = obj.attr('theme')?obj.attr('theme'):'darkblue';
			if (!obj.hasClass('mCustomScrollbar')) {
				if(callbacks){
					if(!callbacks.onScroll){
						callbacks.onScroll = function(){
							$('body .goto-top').removeClass('hide');
						};
					}
					callbacks.onTotalScrollBack = function(){
						$('body .goto-top').addClass('hide');
					} ;
					
					obj.mCustomScrollbar({
						theme:theTheme,
						callbacks:callbacks
					});
				}else{
					obj.mCustomScrollbar({
						theme:theTheme,
						callbacks:{
							onScroll : function(){
								$('body .goto-top').removeClass('hide');
							},
							onTotalScrollBack:function(){
								$('body .goto-top').addClass('hide');
							} 
						}
					});
				}
				setTimeout(function(){
					$('body .goto-top').addClass('hide');
				}, 200);
			}
		},
		destroy:function(targetEl){
			$(targetEl).mCustomScrollbar("destroy");
		}
		
	};
	
	/**
	 * 对外暴露的函数
	 */
	var Utils = {
			
		layout : function(targetEl, callbacks) {
			layoutHelper.setLayout(targetEl, callbacks);
		},
		
		/**
		 * 回到顶部事件
		 * @Param targetEl 添加滚动条的id
		 */
		gotoTop:function(targetEl, callback){
			if(!targetEl){
				$(".mCustomScrollbar").mCustomScrollbar("update");
				$(".mCustomScrollbar").mCustomScrollbar("scrollTo","top");
			}else if($(targetEl).hasClass('mCustomScrollbar')){
				$(targetEl).mCustomScrollbar("update");
				$(targetEl).mCustomScrollbar("scrollTo","top");
			}
			if(callback){
				callback();
			};
			setTimeout(function(){
				$('body .goto-top').addClass('hide');
			}, 200);
		},
		
		destroyLayout : function(targetEl) {
			layoutHelper.destroy(targetEl);
		},
		/**
		 * @param key 模块唯一标识，命名规则：包名+文件名（无扩展名） 如home.left
		 * @param json(optional) 用于渲染模版的json数据,改参数可为空，为空时直接返回模版内容
		 */
		template :function(key,json){
			var tpl = templates[key];
			if(json)	return _.template(tpl,json);
			return tpl;
		},
		
		/**
		 * 日历控件
		 */
		datepicker:function(options){
			datepickerHelper.init(options);
		},
		removeDatepicker:function(els){
			datepickerHelper.remove(els);
		},
		/**
		 * alert弹出提示框
		 * @param message 	alert提示内容
		 * @param callback	回调函数
		 */
		alert:function(message,callback){
			callback = callback||function(){};
			bootbox.alert(message, callback);
		},
		/**
		 * 确认框
		 * @param message 	消息内容
		 * @param callback	回调函数，回调函数的参数result为用户选择的结果（确定为true，取消为false）
		 */
		confirm:function(message,callback){
			bootbox.confirm(message, function(result){
				if(callback)	callback(result);
			});
		},
		/**
		 * 弹出输入框
		 * @param message 	消息内容
		 * @param callback	回调函数，回调函数的参数result为用户用户输入的内容
		 */
		prompt:function(message,callback){
			bootbox.prompt(message, function(result){
				if(callback)	callback(result);
			});
		},
		/**
		 * 消息提示框
		 * @param message 	消息内容
		 * @param title 	消息标题(可选参数)
		 * @param type 		消息类型（可选参数,info，error，success三种，默认为notice）
		 * @param needHide 是否需要自动隐藏消息框  ，true:自动隐藏，false:不自动隐藏
		 * */
		notify:function(message,title,type,needHide){
			if(needHide==undefined) needHide=true;
		    var opts = {
	    		sticker: false,
	    		shadow: false,
	    		history: false,
	    		hide:needHide,
	    		opacity: .95 ,
	    		animation: {'effect_in':'slide','effect_out':'none'},
		        text: message,
		        title : title
		    };
		    switch (type) {
		    case 'error':
		        opts.type = "error";
		        break;
		    case 'info':
		        opts.type = "info";
		        break;
		    case 'success':
		        opts.type = "success";
		        break;
		    default:
		    	break;
		    }
		    $.pnotify_remove_all();
		    $.pnotify(opts);
		},
	      
		/**
		* 将文本中的回车，换行，空格转换成html
		*/
		convert2Html: function(text){
			if(!text) return text;
		    return text.replace(/\r\n|\n/g, '<br/>').replace(/[ ]/g, '&nbsp;');
		}()
	};

	module.exports = Utils;
});

