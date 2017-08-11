/**
 * Created by 13995 on 2017/7/25.
 */
//var reg = new RegExp("^1[3|4|5|7|8][0-9]{9}$");
var emailReg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
var email,code,newPwd;
$(function () {
    var timer;//定时器对象
    var count = 60;//60s

    $("#next_btn").on("click",function(){
        email = $("#email").val();
        code = $("#code").val();
        newPwd = $("#newPwd").val();
        if(!emailReg.test(email)){
            layerDialog("请输入正确的邮箱");
        } else if(code.trim() == ""){
            layerDialog("请输入验证码");
        } else if(newPwd.trim() == ""){
            layerDialog("请输入新密码");
        }else{
            doAjax(ajaxType.doPost,forgetPwd,{uname:email,validate:code,password:newPwd},forgetCallback);
        }
    });
    var npwdInput = $("#newPwd");
    npwdInput.keyup(function () {
        if(npwdInput.val().length<6){
            $("#next_btn").css("background","rgba(9,140,229,0.25)");
        } else{
            $("#next_btn").css("background","rgba(9,140,229,1)");
        }
    });
    $("#send_code").on("click",function(){
        email = $("#email").val();
        if(!emailReg.test(email)){
            layerDialog("请输入正确的邮箱");
            return;
        }
        if(count == 60){
            timer = window.setInterval(start,1000);
            $("#send_code").attr("disabled","true");
            doAjax(ajaxType.doPost,regEmailCode,{uname:email},regEcodeCallback);
        }
    });
    function start(){
        if(count == 0){
            window.clearInterval(timer);
            $("#send_code").removeAttr("disabled");
            $("#send_code").html("发送验证码");
            count = 60;
        } else{
            count --;
            $("#send_code").html(count+"(s)后重发");
        }
    }
});
function forgetCallback(data){

    if(data.code==-1){
        layerDialog(data.msg);
        return;
    }
    layerDialog("重设密码成功！");
    setTimeout(function () {
        window.history.go(-1);
    },1000);
}
function regEcodeCallback(data){
    layerDialog(data.msg);
}