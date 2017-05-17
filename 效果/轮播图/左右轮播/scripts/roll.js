$(function () {
    var index = 0;//图片下标初始化
    var len = $("#picture li").length;//获取图片的数量
    //功能：图片切换
    function change(a) {
        $("#picture li").eq(a).fadeIn(800).siblings().hide();
    }
    //功能：自动播放
    function autoPlay() {
        time = setInterval(function () {
            if(index == len-1){index = 0;}else{index++;}
            change(index);
        },3000);
    }
    //事件：左右切换
    $(".prev").click(function () {
        if(index == 0){index = len-1;}else{index--;}
        change(index);
    });
    $(".next").click(function () {
        if(index == len-1){index = 0}else{index++;}
        change(index);
    });
    //事件：鼠标移入移出
    $("#scroll").hover(function () {
        clearInterval(time);
    },function () {
        autoPlay();
    });
    //事件：索引切换
    $("#dot li").click(function () {
       index = $(this).index();
       change(index);
    });
});