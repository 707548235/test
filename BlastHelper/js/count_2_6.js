/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var de,pe,ql;
    var flag;
    //错误提示
    function toast(){
        layer.open({
            content:"请输入正确的值！",
            skin:"msg",
            time:2,
            anim:"up"
        });
    }
    //检测空和非数字
    function doFlag(num){
        return (num=="" || isNaN(num));
    }
    $("#result_c").click(function () {
        de = $("#val_c1").val();
        pe = $("#val_c2").val();
        flag = doFlag(de) || doFlag(pe);
        if(flag){
            toast();
        } else{
            ql = 0.25*Math.PI*Math.pow(de,2)*pe*Math.pow(10,-6);
            $("#val_c3").val(ql.toFixed(2));
        }
    });
});