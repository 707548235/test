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
            layerDialog("请输入正常的值！");
        } else if(m<0.8 || m>2.0){
            countShake("#box_a1","m取值范围0.8~2.0");
        }else{
            a = m*w;
            $("#val_a3").val(a.toFixed(2));
        }
    });
});