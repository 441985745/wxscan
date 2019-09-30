
	function swi1(){
		//单选框选中效果
		//alert($("#timeall").attr("checked") != checked);
			if($("#timeall").attr("checked") == undefined){
				$("#timeall").attr("checked",true);
				$("#month").attr("checked",false);
				$("#year").attr("checked",false);
				$("#startdate").attr("disabled",false);
				$("#enddate").attr("disabled",false);
				$("#mons").attr("disabled",true);
				$("#years").attr("disabled",true);
				
				$("#mons").attr("value","");
				$("#years").attr("value","");
				$("#mons").val("");
				$("#years").val("");
			}
			
			$("#month").attr("checked",false);
			$("#year").attr("checked",false);
		}

		function swi2(){
		 	if($("#month").attr("checked")  == undefined){
				$("#month").attr("checked",true);
				$("#timeall").attr("checked",false);
				$("#year").attr("checked",false);
				$("#startdate").attr("disabled",true);
				$("#enddate").attr("disabled",true);
				$("#mons").attr("disabled",false);
				$("#years").attr("disabled",true);
				$("#startdate").attr("value","");
				$("#startdate").val("");
				$("#enddate").val("");
				$("#years").val("");
				$("#enddate").attr("value","");
				$("#years").attr("value","");
				
			}
			
			$("#timeall").attr("checked",false);
			$("#year").attr("checked",false);
			
		}

		function swi3(){
			if($("#year").attr("checked") == undefined){
				$("#year").attr("checked",true);
				$("#timeall").attr("checked",false);
				$("#month").attr("checked",false);
				$("#startdate").attr("disabled",true);
				$("#enddate").attr("disabled",true);
				$("#mons").attr("disabled",true);
				$("#years").attr("disabled",false);
				$("#startdate").val("");
				$("#enddate").val("");
				$("#mons").val("");
				$("#startdate").attr("value","");
				$("#enddate").attr("value","");
				$("#mons").attr("value","");
			}
			$("#timeall").attr("checked",false);
			$("#month").attr("checked",false);
		}
