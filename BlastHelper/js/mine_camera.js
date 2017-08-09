/**
 * Created by 13995 on 2017/7/31.
 */
function setImagePreview() {
    var preview, img_txt, localImag, file_head = document.getElementById("file_head"),
        picture = file_head.value,url;
    if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),
        !1;
    if (preview = document.getElementById("header_icon"), file_head.files && file_head.files[0]) preview.style.display = "block",
        preview.style.width = "63px",
        preview.style.height = "63px",
        url = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]),
        preview.src = url,
        upload(url);
    else {
        file_head.select(),
            file_head.blur(),
            img_txt = document.selection.createRange().text,
            localImag = document.getElementById("headerImg")
            //localImag.style.width = "63px",
            //localImag.style.height = "63px";
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
    //return document.getElementById("DivUp").style.display = "block",
    //    !0
}
function upload(url){
    var image = new Image();
    image.src = url;              //s是图片的路径
    image.onload = function() { //image.onload是等待图片加载完毕，等待图片加载完毕之后，才能对图片进行操作
        var width = image.width;//根据图片的宽高，将图片进行压缩
        var height = image.height;
        if(width > height) {
            height = Math.round(500 * width / height);
            width = 500;
        } else {
            width = Math.round(500 * width / height);
            height = 500;
        }
        var canvas = document.getElementById("photo");
        var cax = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        cax.drawImage(image, 0, 0, width, height);//重绘
        var dataUrl = canvas.toDataURL("image/png");//dataUrl 即为base编码字符串
//            console.log(dataUrl);

        //上传接口
        doAjax(ajaxType.doPost,headerUrl,{uname:username,base:dataUrl,randomCode:randomCode},uploadCallback)
    }
}
function uploadCallback(data){
    if(data.code==1){
        layerDialog(data.msg);
    }
}
