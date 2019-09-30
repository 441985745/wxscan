<%--
  Created by IntelliJ IDEA.
  User: zhangshulong
  Date: 2019/9/30
  Time: 10:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>Title</title>
    <script type="text/javascript" src="/js/jquery-3.1.1.min.js"></script>
    <script type='text/javascript' src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>

</head>
<body>
<div style="width: 100%; text-align: center;">
    <a href="javascript:;" id="scanQRCode" style="width: 80%;">扫描盒码</a>
</div>
</body>
<script type="text/javascript">
    wx.config({
        debug : true,
        appId : '${sign.appId}', // 必填，公众号的唯一标识
        timestamp : '${sign.timestamp}', // 必填，生成签名的时间戳
        nonceStr : '${sign.nonceStr}', // 必填，生成签名的随机串
        signature : '${sign.signature}',// 必填，签名，见附录1
        jsApiList : [ 'scanQRCode' ]
    });//end_config
    //步骤五
    wx.error(function(res) {
        alert("出错了：" + res.errMsg);
        console.log(res);
    });
    //步骤四
    wx.ready(function() {
        wx.checkJsApi({
            jsApiList : [ 'scanQRCode' ],
            success : function(res) {
                alert(res)
            }
        });
        $("#data").empty();
        //扫描二维码
        document.querySelector('#scanQRCode').onclick = function() {
            wx.scanQRCode({
                needResult : 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType : [ "qrCode", "barCode" ], // 可以指定扫二维码还是一维码，默认二者都有
                success : function(res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    alert(result)
                    //document.getElementById("wm_id").value = result;//将扫描的结果赋予到jsp对应值上


                    //search(res.resultStr);
                }
            });
        };//end_document_scanQRCode
    });//end_ready




</script>
</html>
