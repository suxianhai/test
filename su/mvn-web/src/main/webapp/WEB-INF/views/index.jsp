<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>  
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>风险评估系统</title>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<link rel="stylesheet" href="static/js/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css">

<link href="static/css/all.css" rel="stylesheet" type="text/css"/>

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="static/js/lib/jquery-1.11.3.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="static/js/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

<!-- 引入seajs -->
<script src="static/js/lib/sea.min.js"></script>
<!-- 如果需要将tpl文件转换成文本则需要引入seajs-text -->
<script src="static/js/lib/seajs-text.js"></script>

<!-- 引入underscore -->
<script src="static/js/lib/underscore-min.js"></script>

<!-- 引入backbone -->
<script src="static/js/lib/backbone-min.js"></script>

<script src="static/js/lib/jquery-ui-1.10.4.min.js"></script>

<script>
seajs.config({ 
 	base : "/static/js",
	paths : {
		"tpl" : "/static/template",
		"ras" : "/static/js/ras",
		"plugins":"/static/js/plugins"
	},
	charset:"utf-8",
	debug:true
	}); 

/* 引入主程序入口  */
seajs.use("ras/core/main"); 
</script>
</head>
<!-- class="page-header-fixed" -->
<body style="overflow: hidden;">
	<!-- BEGIN HEADER -->
	<div class="header navbar navbar-inverse navbar-static-top">
		<div class="navbar-inner">
			<div class="container-fluid">
				<!-- BEGIN LOGO -->
				<div class="navbar-header">
			      <a class="navbar-brand" href="#">
			        <img src="static/images/logo.png" alt="logo">
			      </a>
			    </div>
				<!-- END LOGO -->
			</div>
		</div>
	</div>
	<!-- BEGIN TOP NAVIGATION BAR -->
	
	<!-- BEGIN CONTAINER -->
	<div class="page-container row-fluid scrollwrapper">
		<!-- BEGIN SIDEBAR -->
		<div class="page-sidebar nav-collapse">
			<!-- <div><span class="glyphicon glyphicon-home"></span></div> -->
			<!-- BEGIN SIDEBAR MENU -->        
			<ul class="page-sidebar-menu">
				<li class="start active " >
					<a href="index.html" class="router"><i class="glyphicon glyphicon-home"></i><span class="title">系统首页</span><span class="selected"></span></a>
				</li>
				<li>
					<a href="index.html" class="router"><i class="glyphicon glyphicon-th"></i><span class="title">评估项设置</span></a>
				</li>
				<li>
					<a href="index.html" class="router"><i class="glyphicon glyphicon-edit"></i><span class="title">评估项管理</span></a>
				</li>
				<li>
					<a href="index.html" class="router"><i class="glyphicon glyphicon-user"></i><span class="title">用户管理</span></a>
				</li>
				<li>
					<a href="index.html" class="router"><i class="glyphicon glyphicon-lock"></i><span class="title">角色权限</span></a>
				</li>
				<li class="last">
					<a href="charts.html" class="router"><i class="glyphicon glyphicon-cog"></i><span class="title">系统设置</span></a>
				</li>
			</ul>
			<!-- END SIDEBAR MENU -->
		</div>
		<!-- END SIDEBAR -->
		
		<!-- BEGIN PAGE -->
		<div class="page-content">
			<div class="container-fluid" id="mainContainer">
			
			</div>
		</div>
		<!-- END PAGE -->		
	</div>
	<!-- END CONTAINER -->
	
	<!-- BEGIN FOOTER -->
	<div class="footer"></div>
	<!-- END FOOTER -->
	
</body>
</html>