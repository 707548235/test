/**
 * Created by 13995 on 2017/8/1.
 */
var sayIndex;//评论的哪个li
var goodIndex;//点赞的哪个li
var allData;//临时存储动态数据
var title;//标题
var commenId;//动态id
var commentTxt;//回复评论内容
var goodFlag;//赞的标识1点赞-1取消
var img;//点赞图片节点
var inUrl;
var inFlag;
$(function () {
    inUrl = sessionStorage.getItem("inUrl");//不同入口url不同
    inFlag = sessionStorage.getItem("inFlag");//不同入口url不同
    doAjax(ajaxType.doPost,inUrl,{uname:username,randomCode:randomCode},circleCallback);
    //时间格式化
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    //发动态
    $(".camera").click(function () {
        if(!checkLogin()){
            return;
        }
       window.location.href = "send_trends.html";
    });

//    点赞
    $("body").on("click",".good_box",function (ev) {
        if(!checkLogin()){
            return;
        }
        goodIndex = $(this).parents("li").index();
        commenId = allData[goodIndex].commentId;
        img = $("#content_ul .out_li:eq("+goodIndex+") .good_box img");
        if(img.attr("src").toString().search("circle_good_pressed.png") != -1){
            goodFlag = -1;//点过赞要取消
        } else{
            goodFlag = 1;//没点过要点赞
        }
        doAjax(ajaxType.doPost,goodUrl,{uname:username,commentId:commenId,upDown:goodFlag,randomCode:randomCode},goodCallback);

    });
    //要评论
    $("body").on("click",".say_box",function (ev) {
        if(!checkLogin()){
            return;
        }
        $(".say_input_div").show();
        $("#say_input").focus();
        $("#say_input").val("");
        sayIndex = $(this).parents("li").index();
        ev.stopPropagation();
        return false;
    });
    //点击其他地方要隐藏评论输入框
    $(document).click(function(){
        if($(".say_input_div").css("display")!=="hidden"){
            $(".say_input_div").hide();
        }
    });
    //点击输入框内不触发document点击
    $("#say_input").click(function () {
       return false;
    });
    //发送
    $("#btn_say").click(function(){
        commentTxt = $("#say_input").val();
        if(commentTxt == ""){
            $(".say_input_div").hide();
            return;
        }
        commenId = allData[sayIndex].commentId;
        doAjax(ajaxType.doPost,sayUrl,{commentId:commenId,uname:username,content:commentTxt,randomCode:randomCode},replyCallback);
    });
});
//回复评论
function replyCallback(data){
    if(data.code == 1){
        var nickname = allData[sayIndex].commentUname;
        $("#content_ul .out_li:eq("+sayIndex+") .say_num").html(allData[sayIndex].reply.length+1);
        $("#content_ul .out_li:eq("+sayIndex+") .comment_ul").append(`<li><div class = "say"> <p class="say_content color_gray_2"><span class="say_nickname color_blue">${nickname}：</span>${commentTxt}</p> </div></li>`);
        allData[sayIndex].reply.push({"commentUname":commentTxt,"contentReply":nickname});
    } else {
        layerDialog(data.msg);
    }

}
//赞
function goodCallback(data){
    if(data.code == 1){
        if(goodFlag == -1){
            img.attr("src","../img/circle_good.png");
            $("#content_ul .out_li:eq("+goodIndex+") .good_num").html(parseInt(allData[goodIndex].good)-1);
            allData[goodIndex].good = parseInt(allData[goodIndex].good)-1
        } else{
            img.attr("src","../img/circle_good_pressed.png");
            $("#content_ul .out_li:eq("+goodIndex+") .good_num").html(parseInt(allData[goodIndex].good)+1);
            allData[goodIndex].good = parseInt(allData[goodIndex].good)+1;
        }
    } else{
        layerDialog(data.msg);
    }

}
//获取动态
function circleCallback(mydata){
    var data;
    if(inFlag == 1){
        title="爆破圈";
        data = mydata;
    } else if(inFlag == 2){
        title="我的动态";
        data = mydata.selfComment;
    } else if(inFlag == 3){
        title="我的赞";
        data = mydata.good;
    } else if(inFlag == 4){
        title="我的评论";
        data = mydata.reply;
    } else{
        title = "加载异常";
        data="";
    }
    $("#title").html(title);
    allData = data;
    //var baseImg = new Base64().decode(data[0].base);
    //es6动态拼接
    for(var i=0;i<data.length;i++){
        var html = `<li class="out_li">
                <div class="head">
                <img src="${data[i].head == null ? '../img/mine_camera.png':data[i].head}" class="head_icon">
                <div class="head_info">
                <p class="color_black_3" id="nickname">${data[i].commentUname}</p>
                <span class="color_gray_2" id="time">${new Date(parseInt(data[i].times)).Format("yyyy-MM-dd hh:mm")}</span>
                </div>
                </div>
                <div class="txt">
                <p class="txt_content color_black_3">${data[i].comment}</p>
                </div>
                <div class="pic">`;
        var html2="";
        for(var k=0;k<data[i].img.length;k++){
            html2 +=`<img src=${data[i].img[k]}>`;
        }
        //获取所有图片子元素
        //var count = $(".pic").children("img");
        //var img = $(".pic img");
        //for(var i=0;i<count.length;i++){
        //    if(count.length == 1){//1张图
        //        img.css({"width":"100%","height":"200px"});
        //    } else{//图片多于1张
        //        img.css({"width":"32%","height":"100px"});
        //    }
        //}
        if(data[i].goodTrue){
            var html3 = `
                </div>
                <div class="say_good clear">
                <div class="good_box">
                <img src="../img/circle_good_pressed.png" class="circle_img">&nbsp;<span class="good_num">${data[i].good==null?0:data[i].good}</span>
                </div>
                <div class = say_box>
                <img src="../img/circle_say.png" class="circle_img">&nbsp;<span class="say_num"></span>
                </div>
                </div>
                <ul class="comment_ul">`;
        }else{
            var html3 = `
                </div>
                <div class="say_good clear">
                <div class="good_box">
                <img src="../img/circle_good.png" class="circle_img">&nbsp;<span class="good_num">${data[i].good==null?0:data[i].good}</span>
                </div>
                <div class = say_box>
                <img src="../img/circle_say.png" class="circle_img">&nbsp;<span class="say_num"></span>
                <!--<img src="../img/circle_say.png">&nbsp;<span class="say_num">${data[i].reply.length}</span>-->
                </div>
                </div>
                <ul class="comment_ul">`;
        }
        var html4="";
        for(var j=0;j<data[i].reply.length;j++){
            html4 += `<li>
                <div class = "say">
                <p class="say_content color_black_3"><span class="say_nickname color_blue">${data[i].reply[j].commentUname}：</span>${data[i].reply[j].contentReply}</p>
                </div>
                </li>`;
        }
        var html5 = `</ul></li>`;
        $("#content_ul").append(html+html2+html3+html4+html5);
    }
}