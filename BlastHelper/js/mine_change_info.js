/**
 * Created by 13995 on 2017/8/1.
 */
$(function () {
    var nickname,sex,area,ownSign;

    var infoData = JSON.parse(sessionStorage.getItem("infoData"));
    //设置当前页默认值
    $("#nickname").val(infoData[0].ncname);
    infoData[0].sex == 1 ? $("#man").prop("checked","checked"):$("#woman").removeProp("checked");
    $("#area").val(infoData[0].ip);
    $("#ownSign").val(infoData[0].ps);
    //提交
    $("#change_ok").click(function () {
        if(checkData()){
            var myData = {uname:username,ncname:nickname,sex:sex,ip:area,ps:ownSign,randomCode:randomCode};
            doAjax(ajaxType.doPost,mineChangeInfoUrl,myData,changeCallback);
        }
    });
    //检查数据
    function checkData(){
        nickname = $("#nickname").val();
        sex = ($("input[type=radio]:checked").val())=="man" ? 1:2;
        area = $("#area").val();
        ownSign = $("#ownSign").val();
        if(nickname == "" || area == ""){
            layerDialog("请补充信息");
            return false;
        }
        return true;
    }
});

function changeCallback(data){
    layerDialog("修改成功！");
}