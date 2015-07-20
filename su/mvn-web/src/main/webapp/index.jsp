<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>  
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<link rel="stylesheet" href="static/js/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css">

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
<body>
	<div id="mainContainer"></div>
</body>
</html>