/**
 * Created by 13995 on 2017/7/25.
 */
$(function () {
    $(".dialog_ok").click(function () {
        doAjax(ajaxType.doPost,exitUrl,{uname:username,randomCode:randomCode},exitCallback);
    });
    var myData = {uname:username,randomCode:randomCode};
    doAjax(ajaxType.doPost,mineUrl,myData,mineCallback);
    $("#m_trends").click(function () {
        sessionStorage.setItem("inUrl",mineTrends);
        sessionStorage.setItem("inFlag","2");
    });
    $("#m_good").click(function () {
        sessionStorage.setItem("inUrl",mineGood);
        sessionStorage.setItem("inFlag","3");
    });
    $("#m_say").click(function () {
        sessionStorage.setItem("inUrl",mineSay);
        sessionStorage.setItem("inFlag","4");
    });
});
//接口成功回调
function mineCallback(data){
    var expMax = 250;//每级需250经验
    var nowL = parseInt(data.experience/expMax);//当前等级
    var lessExp = expMax - data.experience%expMax;//到下级经验
    if(data.base != null && data.base != ""){
        $("#mine_icon").attr("src",data.base);
    }
    if(data.ncname != null && data.ncname != ""){
        $("#nickname").html(data.ncname);
    }
    $("#nowL").html(nowL);
    $("#lessL").html(lessExp);
    $("#nextL").html(nowL+1);

    sessionStorage.setItem("nowLevel",nowL);
    sessionStorage.setItem("nowExp",data.experience);
}
function exitCallback(data){
    window.location.href="../index.html";
    sessionStorage.clear();
    localStorage.clear();
}