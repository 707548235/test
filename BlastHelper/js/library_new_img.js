/**
 * Created by 13995 on 2017/7/31.
 */
$(function () {
    var index = sessionStorage.getItem("index");
    var url = "../img/"+index+".png";
    var flag = true;//标识正常状态
    $("#tableImg").attr("src",url);
    $(document).doubleTap(function () {
        if(flag){
            //正常状态双击放大
            //$(".common_header").css("width","200%");
            $("#tableImg").css({"width":"200%","height":"100%"});
            flag = false;
        } else{
            //放大状态双击还原
            //$(".common_header").css("width","100%");
            $("#tableImg").css({"width":"100%","height":"auto"});
            flag = true;
        }
    });
});