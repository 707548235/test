/**
 * Created by 13995 on 2017/7/28.
 */
$(function () {
    var L, D,sita, h, l, a, b,Q;
    var c1,c2,c3,c4,c5;//系数
    var flag;
    $("#result_a").on("click", function () {
        c1 = $("#val_a1").val();
        D = $("#val_a2").val();
        flag = doFlag(c1) || doFlag(D);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c1<0.5||c1>0.67){
            countShake("#box_a1","系数取值范围0.50~0.67");
        } else{
            L = Math.PI*c1*D;
            $("#val_a3").val(L.toFixed(2));
        }
    });
    $("#result_b").on("click", function () {
        c2 = $("#val_b1").val();
        sita = $("#val_b2").val();
        flag = doFlag(c2) || doFlag(sita);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c2<1.5||c2>3.0){
            countShake("#box_b1","系数取值范围1.5~3.0");
        } else{
            h = c2*sita;
            $("#val_b3").val(h.toFixed(2));
        }
    });
    $("#result_c").on("click", function () {
        c3 = $("#val_c1").val();
        flag = doFlag(c3);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c3<0.67||c3>0.70){
            countShake("#box_c1","系数取值范围0.67~0.70");
        } else{
            l = c3*sita;
            $("#val_c2").val(l.toFixed(2));
        }
    });
    $("#result_d").on("click", function () {
        c4 = $("#val_d1").val();
        flag = doFlag(c4);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c4<0.80||c4>1.50){
            countShake("#box_d1","系数取值范围0.80~1.50");
        } else{
            a = c4*l;
            $("#val_d2").val(a.toFixed(2));
        }
    });
    $("#result_e").on("click", function () {
        c5 = $("#val_e1").val();
        flag = doFlag(c5) || doFlag(a);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c5<0.85||c5>1){
            countShake("#box_e1","系数取值范围0.85~1.0");
        } else{
            b = c5*a;
            $("#val_e2").val(b.toFixed(2));
        }
    });
    $("#result_f").on("click", function () {
        q = $("#val_f1").val();
        flag = doFlag(q) || doFlag(a) || doFlag(b) || doFlag(sita);
        if(flag){
            layerDialog("请输入正确的值");
        } else{
            Q = q*a*b*sita;
            $("#val_f2").val(Q.toFixed(2));
        }
    });
});