//swiper自带的js代码
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
//      从swiper官网上复制过来的属性
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    			swiperAnimateCache(swiper); //隐藏动画元素 
    			swiperAnimate(swiper); //初始化完成开始动画
  			    }, 
  		onSlideChangeEnd: function(swiper){ 
    			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  		}         
    });
//音乐控制
var music=document.getElementById("music");
var music1=music.getElementsByClassName("music1")[0];
var music2=music.getElementsByClassName("music2")[0];
var au=music.getElementsByTagName("audio")[0];
//定义音乐的状态变量
var music_sta=1;
music.onclick=function(){
	if(music_sta==1){
		music1.style.display="none";
//		停止转动动画
		music2.style.animation="none";
//		暂停音乐
		au.pause();
		music_sta=2;
	}
	else if(music_sta==2){
		music1.style.display="block";
		music2.style.animation="run 2s linear infinite";
//		播放音乐
		au.play();
		music_sta=1;
	}
}
