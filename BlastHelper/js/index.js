/**
 * Created by 13995 on 2017/7/18.
 */
//禁用浏览器回退
//history.pushState(null,null,document.URL);
//window.addEventListener('popstate', function () {
//    history.pushState(null,null,document.URL);
//});

$(function () {
    var loginCode = '<div id="post_info"> ' +
        '<form action="javascript:void(0)" method="post" id="login_form"> ' +
        '<div class="form_login"> ' +
        '<div class="username_box"> ' +
        '<img src="img/login_user.png"> <input id="username" class="color_gray " type="text" name="username" placeholder="手机号" maxlength="15"> ' +
        '</div> ' +
        '<div class="password_box"> ' +
        '<img src="img/login_password.png"> <input id="password " class="color_gray" type="password" name="password" placeholder="密码" maxlength="10"><a href="../BlastHelper/view/forget_password.html" class="forget_pwd">忘记密码？</a> ' +
        '</div> ' +
        '<div id="login_btn"><img src="img/login_btn.png" id="login_btn_img"></div>' +
        '</div> ' +
        '</form> ' +
        '</div>';
    var registerCode = '<div id="post_info"> ' +
        '<form action="javascript:void(0)" method="post" id="register_form"> ' +
        '<div class="form_login"> ' +
        '<div class="username_box"> ' +
        '<img src="img/login_user.png"> <input id="username" class="color_gray " type="text" name="username" placeholder=" 注册手机号" maxlength="11"> ' +
        '</div> ' +
        '<div class="input_box"> <input id="code" type="text" placeholder="请输入验证码" style="margin-left: 12px;"> ' +
        '<button id="send_code_btn" type="button">发送验证码</button> ' +
        '</div>'+
        '<div class="password_box"> ' +
        '<img src="img/login_password.png"> <input id="password" class="color_gray" type="password" name="password" placeholder="设置密码,不能超过十位" maxlength="10" style="padding-left: 7px;"> ' +
        '</div> ' +
        '<button class="btn" id="register_btn" type="button">注册</button> ' +
        '</div> ' +
        '</form> ' +
        '</div>';
    $("#register").click(function () {
        $(".register_txt").removeClass("color_gray").addClass("color_blue");
        $(".login_txt").removeClass("color_blue").addClass("color_gray");
        $("#post_info").html(registerCode);
    });
    $("#login").click(function () {
        $(".register_txt").removeClass("color_blue").addClass("color_gray");
        $(".login_txt").removeClass("color_gray").addClass("color_blue");
        $("#post_info").html(loginCode);
    });
    var pwd = $("#password");
    var loginBtnImg = $("#login_btn_img");
    $(pwd).keyup(function () {
        if(pwd.val().length > 5){
            loginBtnImg.css("background","rgba(9,140,229,1)");
        } else{
            loginBtnImg.css("background","rgba(9,140,229,0.25)");
        }
    })
    //验证码
    var timer;
    var count = 60;
    $("body").on("click","#send_code_btn", function () {
        if(count == 60){
            timer = window.setInterval(function () {
                start();
            },1000);
            $("#send_code_btn").attr("disable","true");
        }
    });
    function start(){
        if(count == 0){
            window.clearInterval(timer);
            $("#send_code_btn").removeAttr("disable");
            $("#send_code_btn").html("发送验证码");
            count = 60;
        } else{
            $("#send_code_btn").html(count-- + "(s)");
        }
    }

    //验证用户名密码
    $("body").on("click","#login_btn",function () {
        if(telCheck("用户名错误！","请输入密码！")){
            var myData = {uname:username,upwd:password,randomCode:randomCode};
            doAjax(ajaxType.doPost,loginUrl,myData,loginCallback);
        }
    });
    //验证注册
    $("body").on("click","#register_btn",function () {
        //if(telCheck("请输入正确的手机号！","请输入密码！")){
        //    doAjax(ajaxType.doPost,registerUrl,{uname:username,pwd:password},registerCallback);
        //}
    });
    //验证方法
    function telCheck(errMsg_1,errMsg_2){
        input_user = $("#username");
        input_pwd = $("#password");
        username = input_user.val();
        password = input_pwd.val();
        //var reg = new RegExp("^1[3|4|5|7|8][0-9]{9}$");
        var emailReg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
        if(password.length < 6){
            return false;
        } else if(!emailReg.test(username)){
            layerDialog(errMsg_1);
        } else if(password.trim()==""){
            layerDialog(errMsg_2);
        } else{
            return true;
        }
        setTimeout(function () {
            $("#login_btn_img").attr("src","img/login_btn.png");
        },200);

    }
});
function loginCallback(data) {
    if(data.student == 200){
        localStorage.setItem("uid",data.uid);
        localStorage.setItem("username",username);
        localStorage.setItem("loginDate",new Date().getTime());
        localStorage.setItem("randomCode",randomCode);
        localStorage.setItem("nickname",data.ncname);
    }
    if(data.code == 1){
        window.location.href = "view/home.html";
    } else{
        layerDialog(data.msg);
    }
}
apiready = function() {
    api.addEventListener({
        name:'keyback'
    }, function (ret, err) {
        alert("a");
        api.closeWidget({
            id:'A6058834951299'
        });
    });
}