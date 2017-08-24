/**
 * Created by 13995 on 2017/8/2.
 */
$(function () {
    //zepto不支持一些伪类选择器
    $(".control").hide();
    $("#all").show();
    //展开全部
    $("#all").click(function () {
        $(".control").show();
        $("#all").hide();
    });
    //收起
    $("#simple").click(function () {
        $(".control").hide();
        $("#all").show();
    });
    $(".count_check").click(function (e) {
        if(username == null || username == ""){
            layer.open({
                content:'<span style="font-size: 16px">需要先登录</span>',
                btn:['去登录','取消'],
                btnAlign:'c',
                yes: function () {
                    window.location.href = "../index.html";
                }
            });
            e.preventDefault();
            return false;
        }
    });
    $("#mine_link_1").click(function () {
        if(checkLogin()){
            window.location.href = "../view/home.html";
        }
    });
    $("#mine_link_2").click(function () {
        if(checkLogin()){
            window.location.href = "../view/library_new.html";
        }
    });
    //我的
    $("#mine_link_3").click(function () {
        if(!checkLogin()){
            return;
        }
        window.location.href = "../view/mine.html";
    });
    //爆破圈
    $("#b_circle").click(function(){
        sessionStorage.setItem("inUrl",blastCircleUrl);
        sessionStorage.setItem("inFlag","1");
        window.location.href = "../index.html";
    });
    //获取最新三个动态头像
    doAjax(ajaxType.doPost,homeHeaderUrl,{},headCallback);
    //最新资讯
    //doAjax(ajaxType.doPost,newsUrl,"",newsCallback);
});
function headCallback(data){
    if(data[0] != null && data[0] != ""){
        $("#header_3").attr("src",data[0]);
    }
    if(data[1] != null && data[1] != ""){
        $("#header_2").attr("src",data[1]);
    }
    if(data[2] != null && data[2] != ""){
        $("#header_1").attr("src",data[2]);
    }
}
function newsCallback(data){
    var html = `<li>
                    <img src="../img/head_icon.png" class="section_icon"> <span class="color_gray_5" class="section_name">${data.name}</span>
                    <p class="color_black_3 section_p_1">${data.content}</p>
                    <img src="${data.src}" class="section_image">
                    <p class="color_gray section_p_2">${data.remark}</p>
                </li>`;
    $("#news").append(html);
}
//apiCloud监听手机back键
apiready = function() {
    api.addEventListener({
        name:'keyback'
    }, function (ret, err) {
        alert("a");
        api.closeWidget({
            id:'A6058834951299'
        });
    });
}


