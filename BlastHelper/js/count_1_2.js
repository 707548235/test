/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var a, m, w;
    $("#result_a").click(function () {
        m = $("#val_a1").val();
        w = $("#val_a2").val();
        var flag = m=="" || isNaN(m) || w=="" || isNaN(w);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(m<0.8 || m>2.0){
            countShake("#box_a1","m取值范围0.8~2.0");
        }else{
            a = m*w;
            $("#val_a3").val(a.toFixed(2));
        }
    });

    $("#item_1").click(function () {
        window.location.href="count_1_1.html";
    });
    $("#item_2").click(function () {
        window.location.href="count_1_2.html";
    });
    $("#item_3").click(function () {
        window.location.href="count_1_3.html";
    });
    $("#item_4").click(function () {
        window.location.href="count_1_4.html";
    });
    $("#item_5").click(function () {
        window.location.href="count_2_3.html";
    });
    $("#item_6").click(function () {
        window.location.href="count_2_5.html";
    });
    $("#item_7").click(function () {
        window.location.href="count_7_3.html";
    });
});