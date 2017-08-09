/**
 * Created by 13995 on 2017/8/3.
 */
$(function () {
    var nowLevel = sessionStorage.getItem("nowLevel");
    var nowExp = sessionStorage.getItem("nowExp");
    var less = nowExp-250*nowLevel;//升下一级所需经验
    var width = 100*less/250;
    $("#nowL").html(nowLevel);
    $("#nowExp").html(less);
    $("#lessExp").html(less);
    $("#nowExp_box").attr("aria-valuenow",less);
    $("#nowExp_box").css("width",width+"%");

    $("#goExp").click(function () {
        window.location.href = "blast_circle.html";
    });
});