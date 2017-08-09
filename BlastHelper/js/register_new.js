/**
 * Created by 13995 on 2017/8/4.
 */
//var teLeg = new RegExp("^1[3|4|5|7|8][0-9]{9}$");
var emailReg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
$(function () {
    var myData ;
    var uname,namex,namem,email,emailCode,company,password,rePwd;
    $("#register_ok").singleTap(function () {
        if(check()){
            myData = {uname:email,pwd:password,namex:namex,namem:namem};
            doAjax(ajaxType.doPost,registerUrl,myData,registerCallback);
        }
    });
    var codeBtn = $("#code_btn");
    var count = 60;
    var timer;
    codeBtn.click(function () {
        email = $("#email").val();
        if(!emailReg.test(email)){
            layerDialog("请输入正确的邮箱");
            return;
        }
        if(count == 60){
            codeBtn.attr("disabled","disabled");
            count--;
            doAjax(ajaxType.doPost,regEmailCode,{uname:email},regEcodeCallback);
            timer = setInterval(function () {
                codeBtn.html(count+"(s)后重发");
                count--;
                if(count==0){
                    codeBtn.html("发送验证码");
                    codeBtn.removeAttr("disabled");
                    window.clearInterval(timer);
                    count = 60;
                }
            },1000);
        }
    });
    function check(){
        //uname = $("#username").val();
        namex = $("#namex").val();
        namem = $("#namem").val();
        email = $("#email").val();
        emailCode = $("#emailCode").val();
        company = $("#company").val();
        password = $("#password").val();
        rePwd = $("#rePwd").val();
        if(!emailReg.test(email)){
            layerDialog("请输入正确的邮箱");
            return;
        }
        if(!namex){
            layerDialog("请输入姓");
            return;
        }
        if(!namem){
            layerDialog("请输入名");
            return;
        }
        if(!password){
            layerDialog("请输入密码");
            return;
        }
        if(!rePwd){
            layerDialog("请再次输入密码");
            return;
        }
        if(password != rePwd){
            layerDialog("两次密码输入不一致");
            return;
        }
        return true;
    }
});

function registerCallback(data){
    if(data.codes == -1){
        layerDialog(data.msg);
        return;
    }
    layerDialog("注册成功");
    setTimeout(function () {
        window.history.go(-1);
    },1000);
}

function regEcodeCallback(data){
    layerDialog("");
}