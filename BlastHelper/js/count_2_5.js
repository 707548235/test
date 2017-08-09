/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var f, S, C, b, e,c1,c2,q;
    var flag;

    $("#result_a").click(function () {
        f = $("#val_a1").val();
        S = $("#val_a2").val();
        C = $("#val_a3").val();
        b = $("#val_a4").val();
        e = $("#val_a5").val();
        c1 = $("#val_a6").val();
        c2 = $("#val_a7").val();
        flag = doFlag(f) || doFlag(S) || doFlag(C) || doFlag(b) || doFlag(e) || doFlag(c1) || doFlag(c2);
        if(flag){
            layerDialog("请输入正确的值！");
        } else if(f<6||f>25){
            countShake("#box_a1","f取值范围6~25");
        } else if(C<0.87||C>1.10){
            countShake("#box_a3","C取值范围0.87~1.10");
        } else if(b<1||b>1.2){
            countShake("#box_a4","b取值范围1.00~1.20");
        } else if(e<1||e>1.25){
            countShake("#box_a5","e取值范围1.00~1.25");
        } else if(c1<1||c1>1.1){
            countShake("#box_a6","ξ取值范围1.00~1.10");
        } else if(c2<0.85||c2>1.15){
            countShake("#box_a7","ω取值范围0.85~1.15");
        } else{
            q = (0.3*Math.pow(f,0.5) + 2/Math.pow(S,0.5))*C*b*e*c1*c2;
            $("#val_a8").val(q.toFixed(2));
        }
    });
});