/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var c1, w1,h0,c2, d,h, l, n,vl,pe,ml, q, a,w2,h2,q1,c3, b,q2,last;
    var flag;
    //检测空和非数字
    function doFlag(num){
        return (num=="" || isNaN(num));
    }
    $("#result_a").click(function () {
        c1 = $("#val_a1").val();
        w1 = $("#val_a2").val();
        flag = doFlag(c1) || doFlag(w1);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c1<0.7||c1>1.0){
            countShake("box_a1","系数取值范围0.7~1.0");
        }else{
            h0 = c1*w1;
            $("#val_a3").val(h0.toFixed(2));
        }
    });
    $("#result_b").click(function () {
        c2 = $("#val_b1").val();
        d = $("#val_b2").val();
        flag = doFlag(c2) || doFlag(d);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c2<20 || c2>30){
            countShake("box_b1","系数取值范围20~30");
        }else{
            h0 = c2*d/1000;
            $("#val_b3").val(h0.toFixed(2));
        }
    });
    $("#result_c").click(function () {
        h = $("#val_c1").val();
        flag = doFlag(h) || doFlag(h0);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            l = h-h0;
            $("#val_c2").val(l.toFixed(2));
        }
    });
    $("#result_d").click(function () {
        flag = doFlag(d);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            n = 0.1*d;
            $("#val_d1").val(n.toFixed(2));
        }
    });
    $("#result_e").click(function () {
        flag = doFlag(l) || doFlag(d);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            vl = (Math.PI*Math.pow(d,2)/(4*l))*Math.pow(10,-6);
            $("#val_e1").val(vl.toFixed(2));
        }
    });
    $("#result_f").click(function () {
        pe = $("#val_f1").val();
        flag = doFlag(pe) || doFlag(vl);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            ml = vl*pe*1000;
            $("#val_f2").val(ml.toFixed(2));
        }
    });
    $("#result_g").click(function () {
        q = $("#val_g1").val();
        a = $("#val_g2").val();
        w2 = $("#val_g3").val();
        h2 = $("#val_g4").val();
        flag = doFlag(q) || doFlag(a) || doFlag(w2) || doFlag(h2);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            q1 = q*a*w2*h2;
            $("#val_g5").val(q1.toFixed(2));
        }
    });
    $("#result_h").click(function () {
        c3 = $("#val_h1").val();
        b = $("#val_h2").val();
        flag = doFlag(c3) || doFlag(b) ||doFlag(q) || doFlag(a) || doFlag(h2);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c3<1.10 || c3>1.20){
            countShake("bxo_h1","系数取值范围1.10~1.20");
        }else{
            q2 = c3*q*a*b*h2;
            $("#val_h3").val(q2.toFixed(2));
        }
    });
    $("#result_i").click(function () {
        flag = doFlag(d) || doFlag(l) ||doFlag(q2);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            last = ((4*q2)/(Math.PI*Math.pow(d,2)*l))*Math.pow(10,6);
            $("#val_i1").val(last.toFixed(2));
        }
    });
});