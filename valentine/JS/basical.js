//zepto里的触屏事件,向上滑动
//大总管变量
var c=0;
//获得屏幕高度
var win_height=$(window).height();
//获得总屏数
var length=$("#container .box").length;
$("body").swipeUp(function(){
	c++;
//	避免在最后一屏了还能滑出下一屏
	if(c>length-1){
		c=length-1;
		return;
	}
//	找到c号box里的运动元素,隐藏运动元素，同时删除class animate
    $("#container .box").eq(c).find(".ani").hide().removeClass("animated");
//  设置定时器,1s以后再显示那一屏元素且加回运动
    setTimeout(function(){
    	$("#container .box").eq(c).find(".ani").show().addClass("animated");
    },1000);
	var t=c*-win_height;
	$("#container").css("margin-top",t);
})
//向下滑动
$("body").swipeDown(function(){
	c--;
//	避免在第一屏了还能滑出上一屏
	if(c<0){
		c=0;
//		遇到return后面的函数不会再执行,分析:此时已经在第一屏,所以不需要再重复执行下面的代码
		return;
	}
//	找到c号box里的运动元素，隐藏运动元素,删除class animate
    $("#container .box").eq(c).find(".ani").hide().removeClass("animated");
//  设置定时器,1s以后再显示那一屏元素且加回运动
    setTimeout(function(){
    	$("#container .box").eq(c).find(".ani").show().addClass("animated");
    },1000);
	var t=c*-win_height;
	$("#container").css("margin-top",t);
})
