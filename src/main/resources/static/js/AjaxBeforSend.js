	$.ajaxSetup({      //设置ajax提交为同步提交
	    async : false,
	    contentType:"application/x-www-form-urlencoded;charset=utf-8",   
	    complete:function(XMLHttpRequest,textStatus){ 
	         var sessionstatus=XMLHttpRequest.getResponseHeader("sessionstatus"); //通过XMLHttpRequest取得响应头，sessionstatus，  
		         if(sessionstatus=="timeout"){ 
		        	 alert("登录超时,请重新登录！");
		         //如果超时就处理 ，指定要跳转的页面  
		           window.location.href="login.jsp";   
		         }   
	          } 
	}); 

