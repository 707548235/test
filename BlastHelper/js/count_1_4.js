/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var A, C, a, b, N,vr, H, V,pr, T,ml,q0;
    var flag;

    $("#result_b").click(function () {
        A = $("#val_a1").val();
        C = $("#val_a2").val();
        a = $("#val_b1").val();
        b = $("#val_b2").val();
        flag = doFlag(A) || doFlag(C) || doFlag(a) || doFlag(b);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            N = (A*C)/(a*b);
            $("#val_b3").val(N.toFixed(2));
        }
    });
    $("#result_c").click(function () {
        H = $("#val_c1").val();
        flag = doFlag(H) || doFlag(a) || doFlag(b);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            vr = H*a*b;
            $("#val_c2").val(vr.toFixed(2));
        }
    });
    $("#result_d").click(function () {
        flag = doFlag(N) || doFlag(vr);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            V = N*vr;
            $("#val_d1").val(V.toFixed(2));
        }
    });
    $("#result_e").click(function () {
        pr = $("#val_e1").val();
        flag = doFlag(V) || doFlag(pr);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(pr<1 || pr>4){
            countShake("#box_e1","ρ取值范围1.0~4.0");
        }else{
            T = V*pr;
            $("#val_e2").val(T.toFixed(2));
        }
    });
    $("#result_f").click(function () {
        ml = $("#val_f1").val();
        flag = doFlag(ml) || doFlag(vr);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            q0 = ml/vr;
            $("#val_f2").val(q0.toFixed(2));
        }
    });

});