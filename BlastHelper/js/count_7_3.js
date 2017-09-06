/**
 * Created by 13995 on 2017/7/26.
 */
$(function () {
    $(".nav_box").scrollLeft(250);
    var d, r,k1,k2, w,s;
    //计算
    $("#input_r").click(function () {
        d = $("#val_d").val();
        //简单判断，由于isNaN会将参数先传化为数字，所以非数字都会为NaN
        //var flag = k=="" || q=="" || r=="" || a=="" || isNaN(k) || isNaN(q) || isNaN(r) || isNaN(a);
        var flag = d ==""||isNaN(d);
        if(flag){
            layerDialog("请输入正确的值");
        } else{
            r = 0.8*d;
            $("#result_r").text(r.toFixed(2));
        }
    });
    $("#input_s").click(function () {
        k1 = $("#val_k1").val();
        k2 = $("#val_k2").val();
        w = $("#val_w").val();
        var flag = k1=="" || k2=="" || w=="" || r=="" || isNaN(k1) || isNaN(k2) || isNaN(w) || isNaN(r);
        if(flag){
            layerDialog("请先计算R<sub>F</sub>的值");
        } else if(k1<0.3||k1>2.0){
            countShake("#box_k1","k1取值范围0.3~2.0");
        } else if(k2<0.3||k2>2.0){
            countShake("#box_k2","k2取值范围0.3~2.0");
        } else{
            s = k1*k2*(Math.pow(d,3)/(8*Math.pow(w,3)))*Math.pow(10,-2);
            $("#result_s").text(s.toFixed(2));
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