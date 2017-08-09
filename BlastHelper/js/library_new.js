/**
 * Created by 13995 on 2017/7/31.
 */
$(function () {
    var data = [[{name:"PS型聚能药柱的规格和性能表",table:"1_1"},
        {name:"药包参数和穿孔深度表",table:"1_2"},
        {name:"切割钢板的聚能药包参数表",table:"1_3"},
        {name:"搭接式爆炸压接的管线规格和装药参数表",table:"1_4"},
        {name:"C379型系列石油射孔弹的规格和性能表",table:"1_5"},
        {name:"SBG型爆炸切割弹的类型及主要参数表",table:"1_6"}],
        //
        [{name:"国际炸药组分性能",table:"2_1"},
            {name:"国产炸药组分性能",table:"2_2"},
            {name:"部分乳化炸药的组分与性能",table:"2_3"},
            {name:"几种铵油炸药的成分配比和性能",table:"2_4"},
            {name:"岩石硝铵炸药的组分及技术规格",table:"2_5"},
            {name:"雷管延期时间系列规格",table:"2_6"},
            {name:"Exel毫秒导爆管",table:"2_7"},
            {name:"Exel长延时导爆管",table:"2_8"},
            {name:"Exel地表延时导爆管",table:"2_9"},
            {name:"YJ系列电起爆器",table:"2_10"}],
        //
        [{name:"国产风动凿岩机主要技术参数表",table:"3_1"},
            {name:"COP系列液压凿岩机的部分性能表",table:"3_2"},
            {name:"部分国产潜孔钻机主要技术性能参数表",table:"3_3"},
            {name:"国产破碎器的主要技术性能表",table:"3_4"},
            {name:"常用挖掘机性能表",table:"3_5"}],
    //
        [{name:"常见岩石物理特性",table:"4_1"},
            {name:"常见岩石力学特性",table:"4_2"},
            {name:"岩石普氏系数",table:"4_3"}],
    //
        [{name:"岩石普氏系数",table:"5_1"},
            {name:"孔深查询",table:"5_2"},
            {name:"装药密度",table:"5_3"},
            {name:"单位炸药消耗量",table:"5_4"},
            {name:"乳化炸药性能指标",table:"5_5"},
            {name:"预裂爆破参数经验值",table:"5_6"},
            {name:"古斯塔夫松的预裂爆破参数",table:"5_7"}],
    //
        [{name:"药卷直径影响系数",table:"6_1"},
            {name:"炮孔深度影响系数",table:"6_2"},
            {name:"炸药能量系数",table:"6_3"},
            {name:"装药密度影响系数",table:"6_4"},
            {name:"岩石结构影响系数",table:"6_5"},
            {name:"深孔爆破各类炮孔装药系数",table:"6_6"},
            {name:"平巷掘进炸药消耗定额表",table:"6_7"},
            {name:"装药系数表",table:"6_8"}],
    //
        [{name:"砖结构烟囱活水塔爆破时单位炸药消耗量",table:"7_1"},
            {name:"钢筋混凝土烟囱或水塔爆破时单位炸药消耗量",table:"7_2"}],
    //
        [{name:"K值a值与岩性关系",table:"8_1"},
            {name:"深孔密集程度系数",table:"8_2"},
            {name:"炸药爆能与抵抗相关系数",table:"8_3"},
            {name:"爆破震动安全允许标准",table:"8_4"},
            {name:"地震烈度表",table:"8_5"}]];
    var navIndex = 0;

    $(".nav_bar").click(function () {
        var current = $(this);
        navIndex = current.index();
        $(".nav_bar").each(function () {
            $(this).css({"border-bottom":"2px solid #ffffff","color":"#9B9B9B"});
        });
        current.css({"border-bottom":"2px solid #046FD3","color":"#046FD3"});
        $("#item_list").empty();
        for(var i=0;i<data[navIndex].length;i++) {
            $("#item_list").append('<li class="item_li"><a href="javascript:" class="color_black_2 " > <div><span> ' + data[navIndex][i].name +
            '</span><div class="right"></div><div class="details"></div> </div> </a> </li>');
        }
    });
    $("#item_list").on("click",".item_li", function () {
        var itemIndex = $(this).index();
        sessionStorage.setItem("index",(navIndex+1)+"_"+(itemIndex+1));
        window.location.href="library_new_img.html";
    });
    $(".nav_bar").eq(0).click();
});