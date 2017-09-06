/**
 * Created by 13995 on 2017/9/4.
 */
$(function () {
    for(var i=1;i<=$("#item_parent").children().length;i++){
        (function(i){
            $("#item_"+i).click(function () {
                for(var j=1;j<=$("#item_parent").children().length;j++){
                    (function(j){
                        $("#inner_"+j).hide();
                    })(j);
                }
                $("#inner_"+i).show();
            });
        })(i);
    }
});