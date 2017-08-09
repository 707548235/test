/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var a, h, b, d,w1,c1,w2,c2,w3;
    $("#result_a").click(function () {
        a = $("#val_a1").val();
        h = $("#val_a2").val();
        b = $("#val_a3").val();
        var flag = a=="" || isNaN(a) || h=="" || isNaN(h) || b=="" || isNaN(b);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(h<5.0 || h>22.0){
            countShake("#box_a2","H取值范围5.0~22.0");
        } else if(b<2.0||b>3.0){
            countShake("#box_a3","b取值范围2.0~3.0");
        }else{
            w1 = parseFloat(h/Math.tan(a) + b);
            $("#val_a4").val(w1.toFixed(2));
        }
    });
    $("#result_b").click(function () {
        h = $("#val_a2").val();
        c1 = $("#val_b1").val();
        var flag = c1=="" || isNaN(c1) || h=="" || isNaN(h);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(h<5.0 || h>22.0){
            countShake("#box_a2","H取值范围5.0~22.0");
        } else if(c1<0.60 || c1 >0.90){
            countShake("#box_b1","系数取值范围0.6~0.9");
        } else{
            w2 = c1*h;
            $("#val_b2").val(w2.toFixed(2));
        }
    });
    $("#result_c").click(function () {
        c2 = $("#val_c1").val();
        d = $("#val_c2").val();
        var flag = c2=="" || isNaN(c2);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c2<25 || c2>45){
            countShake("#box_c1","系数取值范围25~45");
        }else{
            w3 = c2*d*Math.pow(10,-3);
            $("#val_c3").val(w3.toFixed(2));
        }
    });
});