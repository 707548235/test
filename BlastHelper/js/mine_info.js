/**
 * Created by 13995 on 2017/7/31.
 */
$(function () {
    $(".headerImg").click(function () {
        $("#file_head").click();
    });
    //获取信息
    doAjax(ajaxType.doPost,mineInfoUrl,{uname:username,randomCode:randomCode},infoCallback);

    //获取头像
    doAjax(ajaxType.doPost,headerUrl,{uname:username,randomCode:randomCode},headerCallback);

});

function infoCallback(data){
    $("#nickname").html(data[0].ncname);
    $("#username").html(username);
    $("#sex").html(data[0].sex==1?"男":"女");
    $("#address").html(data[0].ip);
    $("#sign").html("");
    sessionStorage.setItem("infoData",JSON.stringify(data));
}
function headerCallback(data){

    if(data[0].base != null){
        $("#header_icon").attr("src",data[0].base);
    }

}