
	/*
			 * 弹出DIV层
			 */
			
			
			
			
			function showmsg(msgtext) {
				
					title="提示信息";
				
				
				//创建弹出层
				var	msgdiv='<div id="mou_head" style="width:300px; height:30px;line-height:30px;z-index:9990; position:absolute;background: red;">';
				    msgdiv+='<button onclick="closeDiv();"style="background: none;border: none;float: right;margin-right:10px;"><font size="3" color="white">关闭 X</font></button>';
				    msgdiv+='<font color="white" size="3" style="margin-left:10px;">'+title+'</font></div>';
				    msgdiv+='<div id="msgdiv" style="position: absolute;top: 70px;padding: 10px;">';
				    msgdiv+=msgtext+'</div>';
				   
				var mpdiv=document.createElement("div");
					mpdiv.setAttribute("id", "mpdiv"); //定义该div的id
					mpdiv.style.position="absolute";
					mpdiv.style.zIndex="9910";
					mpdiv.style.background="#F8F8F8";
					mpdiv.style.width="300px";
					mpdiv.style.height="200px";
					mpdiv.style.border="1px solid red";
					mpdiv.style.display="block";	
					mpdiv.innerHTML=msgdiv;
					document.body.appendChild(mpdiv);//添加到页面中
				
				
				//以下部分要将弹出层居中显示
				mpdiv.style.left = (document.documentElement.clientWidth - mpdiv.clientWidth) / 2 + document.documentElement.scrollLeft + "px";
				mpdiv.style.top = (document.documentElement.clientHeight - mpdiv.clientHeight) / 2 + document.documentElement.scrollTop +50 + "px";

				//以下部分使整个页面至灰不可点击
				var procbg = document.createElement("div"); //首先创建一个div
				procbg.setAttribute("id", "mybg"); //定义该div的id
				procbg.style.background = "#000000";
				procbg.style.width = "100%";
				procbg.style.height = "100%";
				procbg.style.position = "fixed";
				procbg.style.top = "0";
				procbg.style.left = "0";
				procbg.style.zIndex = "9900";
				procbg.style.opacity = "0.6";
				procbg.style.filter = "Alpha(opacity=70)";
				//背景层加入页面
				document.body.appendChild(procbg);
				document.body.style.overflow = "hidden"; //取消滚动条

				//以下部分实现弹出层的拖拽效果
				var posX;
				var posY;
				mou_head.onmousedown = function(e) {
					if(!e) e = window.event; //IE
					posX = e.clientX - parseInt(mpdiv.style.left);
					posY = e.clientY - parseInt(mpdiv.style.top);
					document.onmousemove = mousemove;
				}
				document.onmouseup = function() {
					document.onmousemove = null;
				}

				function mousemove(ev) {
					if(ev == null) ev = window.event; //IE
					mpdiv.style.left = (ev.clientX - posX) + "px";
					mpdiv.style.top = (ev.clientY - posY) + "px";
				}
			}

			function closeDiv() //关闭弹出层
			{
				var mpdiv = document.getElementById("mpdiv");
				//mpdiv.style.display = "none";
				document.body.style.overflow = "auto"; //恢复页面滚动条
				var body = document.getElementsByTagName("body");
				var mybg = document.getElementById("mybg");
				body[0].removeChild(mpdiv);
				body[0].removeChild(mybg);
			}
		//设置自动关闭时间	
		//window.setInterval("closeDiv()",3000);	