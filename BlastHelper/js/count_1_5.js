/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var H,wc, E, K, d, W1, a, k,W2, q,c1,l1,c2,l2;
    var flag;

    $("#result_a").click(function () {
        H = $("#val_a1").val();
        wc = $("#val_a2").val();
        flag = doFlag(H) || doFlag(wc);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            E = H/wc;
            $("#val_a3").val(E.toFixed(2));
        }
    });
    $("#result_b").click(function () {
        K = $("#val_b1").val();
        d = $("#val_b2").val();
        flag = doFlag(K) || doFlag(d);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(K<30||K>40){
            countShake("#box_b1","K取值范围30~40");
        }else{
            W1 = (K*d)/1000;
            $("#val_b3").val(W1.toFixed(2));
        }
    });
    $("#result_c").click(function () {
        a = $("#val_c1").val();
        k = $("#val_c2").val();
        flag = doFlag(a) || doFlag(k);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(k<1||k>6){
            countShake("#box_c2","取值范围1~6");
        } else{
            W2 = a/k;
            $("#val_c3").val(W2.toFixed(2));
        }
    });
    $("#result_d").click(function () {
        q = $("#val_d1").val();
        flag = doFlag(q);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            W1 = 1.087*Math.pow(q,0.5);
            $("#val_d2").val(W1.toFixed(2));
        }
    });
    $("#result_e").click(function () {
        c1 = $("#val_e1").val();
        flag = doFlag(c1) || doFlag(W1);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c1<0.9||c1>1.0){
            countShake("#box_e1","系数范围0.9~1.0");
        } else{
            l1 = c1*W1;
            $("#val_e2").val(l1.toFixed(2));
        }
    });
    $("#result_f").click(function () {
        c2 = $("#val_f1").val();
        flag = doFlag(c2) || doFlag(d);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c2<20||c2>30){
            countShake("#box_f1","系数取值范围20~30");
        } else{
            l2 = c2*d*Math.pow(10,-3);
            $("#val_f2").val(l2.toFixed(2));
        }
    });

});