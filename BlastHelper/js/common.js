/**
 * Created by 13995 on 2017/8/3.
 */

//用户名
var username = localStorage.getItem("username");
var ajaxType = {doPost:"POST",doGet:"GET"};
var randomCode="";
if(localStorage.getItem("randomCode") == null){
    for(let r=0;r<4;r++){
        randomCode += parseInt(Math.random()*10).toString();
    }
} else{
    randomCode = localStorage.getItem("randomCode");
}

//登录
var loginUrl = "http://192.168.1.119/data/user_login.php";
//注册
var registerUrl = "http://192.168.1.119/data/add.php";
//我的界面获取所有信息
var mineUrl = "http://192.168.1.119/data/experience.php";
//发表动态
var uploadUrl = "http://192.168.1.119/data/experience.php";
//主页获取三个最新动态头像
var homeHeaderUrl = "http://192.168.1.119/data/new_comment.php";
//修改个人信息
var mineChangeInfoUrl = "http://192.168.1.119/data/detailed_information.php";
//爆破圈
var blastCircleUrl = "http://192.168.1.119/data/comment.php";//获取动态
//我的动态
var mineTrends = "http://192.168.1.119/data/my_comment.php";
//我的点赞
var mineGood = "http://192.168.1.119/data/my_comment.php";
//我的评论
var mineSay = "http://192.168.1.119/data/my_comment.php";
//赞
var goodUrl = "http://192.168.1.119/data/good.php";
//回复
var sayUrl = "http://192.168.1.119/data/comment_reply.php";//评论
//我的信息
var mineInfoUrl = "http://192.168.1.119/data/gain_information.php";
//上传,获取头像
var headerUrl = "http://192.168.1.119/data/img_base64.php";
//注册
var registerUrl = "http://192.168.1.119/data/add.php";
//注册邮箱验证
var regEmailCode = "http://192.168.1.119/data/index.php";
//找回密码
var forgetPwd = "http://192.168.1.119/data/get_back_password.php";
//退出
var exitUrl = "http://192.168.1.119/data/user_login.php";
//新闻资讯
var newsUrl = "";

//ajax请求
function doAjax(type,url,uploadData,ajaxCallback){
    $.ajax({
        type:type,
        url:url,
        data:uploadData,
        success: function (data) {
            if(data.code == -2){
                layerDialog(data.msg);
                setTimeout(function () {
                    window.location.href="../index.html";
                },2000);
                return;
            }
            ajaxCallback(data);
        },
        error: function () {
            layerDialog("获取信息失败，请检查网络!");
        }
    });
}
//toast提示
function layerDialog(message){
    layer.open({
       content:message,
        skin:"msg",
        time:2,
        anim:"up"
    });
}
//计算范围提示
function countShake(id,toast){
    $(id).addClass("animated shake");
    layerDialog(toast);
    setTimeout(function () {
        $(id).removeClass("animated shake");
    },1000);
}
//检测空和非数字
function doFlag(num){
    return (num=="" || isNaN(num));
}

