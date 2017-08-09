/**
 * Created by 13995 on 2017/7/26.
 */
$(function () {
    /*
    $("#c_1_img").on("click", function () {
        $("#sc_1").toggle();
    });
    $("#sub_1").click(function () {
        var count = parseFloat($(".scroll_cro").css("left"))-0.5;
        $(".scroll_cro").css("left",count+"px");
    });
    $("#add_1").click(function () {
        var count = parseFloat($(".scroll_cro").css("left"))+0.5;
        $(".scroll_cro").css("left",count+"px");
    });
    */
    var k, q, r, a, v, max;
    //计算
    $("#input_v").click(function () {
        k = $("#val_k").val();
        q = $("#val_q").val();
        r = $("#val_r").val();
        a = $("#val_a").val();
        //简单判断，由于isNaN会将参数先传化为数字，所以非数字都会为NaN
        var flag = k=="" || q=="" || r=="" || a=="" || isNaN(k) || isNaN(q) || isNaN(r) || isNaN(a);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(k<50 || k > 350){
            countShake("#box_k","K取值范围50~350");
        } else if(a<1.3 || a>2.0){
            countShake("#box_a","α取值范围1.3~2.0");
        }else{
            v = k*(Math.pow((Math.pow(q,1/3)/r),a));
            $("#result_v").text(v.toFixed(2));
        }


    });
    $("#input_q").click(function () {
        if(v=="" || isNaN(v)){
            layerDialog("请先计算V的值");
        } else{
            max = (Math.pow(r,3))*(Math.pow((v/k),(3/a)));
            $("#result_max").text(max.toFixed(2));
        }
    });
});