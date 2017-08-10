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
    //爆破圈
    $("#b_circle").click(function(){
        sessionStorage.setItem("inUrl",blastCircleUrl);
        sessionStorage.setItem("inFlag","1");
    });
    //获取最新三个动态头像
    doAjax(ajaxType.doPost,homeHeaderUrl,{randomCode:randomCode},headCallback);
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

