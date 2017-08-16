/**
 * Created by 13995 on 2017/7/31.
 */
var index=1;//img下标
var imgs = [];//存储图片的base64编码
$(function () {
    //返回
    $("#back").click(function () {
        index = 1;
    });
    //添加图片
    $("#addImg").click(function () {
        if(index > 9){
           layerDialog("不能再添加图片了！");
            return;
        }
        $("#file_head").click();//除法隐藏input的onchange
    });
    //发表
    $("#send").click(function () {
        var txt = $(".trends_txt").val();
        if(txt == ""){
            layerDialog("请输入动态文字！");
            return;
        }
        var myData = {uname:username,img:imgs.join('|'),comment:txt,randomCode:randomCode}
        doAjax(ajaxType.doPost,uploadUrl,myData,sendCallback);
        index = 1;
    });
});
function sendCallback(){
    layerDialog("发表成功！");
    window.location.href = "blast_circle.html";
}
//修改后的选择图片
function setImagePreview() {
    var preview, img_txt, localImag, file_head = document.getElementById("file_head"),
        picture = file_head.value,url;
    if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),
        !1;
    if (preview = document.getElementById("header_icon"+index),
        file_head.files && file_head.files[0])
        preview.style.visibility = "visible",//是添加的图片显示
        url = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]),
        preview.src = url,//设置图片
        index++,
        upload(url);//图片base64加入数组

    else {
        file_head.select(),
            file_head.blur(),
            img_txt = document.selection.createRange().text,
            localImag = document.getElementById("headerImg")
        try {
            localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",
                localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt
        } catch(f) {
            return alert("您上传的图片格式不正确，请重新选择！"),
                !1
        }
        preview.style.display = "none",
            document.selection.empty()
    }
    return ;
}
//图片编码base64
function upload(url){
    var image = new Image();
    image.src = url;              //s是图片的路径
    image.onload = function() { //image.onload是等待图片加载完毕，等待图片加载完毕之后，才能对图片进行操作
        var width = image.width;//根据图片的宽高，将图片进行压缩
        var height = image.height;
        if(width > height) {
            height = Math.round(50 * width / height);
            width = 50;
        } else {
            width = Math.round(50 * width / height);
            height = 50;
        }
        var canvas = document.getElementById("photo");
        var cax = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        cax.drawImage(image, 0, 0, width, height);//重绘
        var dataUrl = canvas.toDataURL("image/png");//dataUrl 即为base编码字符串
        //            console.log(dataUrl);
        imgs.push(dataUrl);
        return dataUrl;
    }
}

