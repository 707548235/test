/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var d,de, D,c1, E,c2,ws,m;
    var flag;

    $("#result_a").click(function () {
        d = $("#val_a1").val();
        de = $("#val_a2").val();
        flag = doFlag(d) || doFlag(de);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            D = d/de;
            $("#val_a3").val(D.toFixed(2));
        }
    });
    $("#result_b").click(function () {
        c1 = $("#val_b1").val();
        flag = doFlag(d) || doFlag(c1);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c1<8||c1>18){
            countShake("#box_b1","系数取值范围8~18");
        } else{
            E = c1*d*Math.pow(10,-3);
            $("#val_b2").val(E.toFixed(2));
        }
    });
    $("#result_c").click(function () {
        c2 = $("#val_c1").val();
        flag = doFlag(c2) || doFlag(d);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(c2<10||c2>12){
            countShake("#box_c1","系数取值范围10~12");
        } else{
            ws = c2*d*Math.pow(10,-3);
            $("#val_c2").val(ws.toFixed(2));
        }
    });
    $("#result_d").click(function () {
        flag = doFlag(E) || doFlag(ws);
        if(flag){
            layerDialog("请输入正确的值！");
        } else{
            m = E/ws;
            $("#val_d1").val(m.toFixed(2));
        }
    });
});