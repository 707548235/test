/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var c1,c2,d, K, a,c3,c4,ql;
    var flag;

    $("#result_a").click(function () {
        c1 = $("#val_a1").val();
        c2 = $("#val_a2").val();
        d = $("#val_a3").val();
        K = $("#val_a4").val();
        a = $("#val_a5").val();
        c3 = $("#val_a6").val();
        c4 = $("#val_a7").val();
        flag = doFlag(c1) || doFlag(c2) || doFlag(d) || doFlag(K) || doFlag(a) || doFlag(c3) || doFlag(c4);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(K<0.0034||K>0.3670){
            countShake("#box_a4","K取值范围0.0034~0.3670");
        } else if(a<0.5||a>0.63){
            countShake("#box_a5","a取值范围0.50~0.63");
        } else if(c4<0.24||c4>0.67){
            countShake("#box_a7","γ取值范围0.24~0.67");
        } else{
            ql = K*c1*c2*Math.pow(a,c3)*Math.pow(d/1000,c4);
            $("#val_a8").val(ql.toFixed(2));
        }
    });

    var de,pe,q2;
    var flag;

    $("#result_b").click(function () {
        de = $("#val_b1").val();
        pe = $("#val_b2").val();
        flag = doFlag(de) || doFlag(pe);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            q2 = 0.25*Math.PI*Math.pow(de,2)*pe*Math.pow(10,-6);
            $("#val_b3").val(q2.toFixed(2));
        }
    });
});