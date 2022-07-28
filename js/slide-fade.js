$(function(){
    start();
    var imgs = 2;
    var now = 0;

    function start(){
        $('.slide img').eq(0).siblings().fadeIn();
        setInterval(function(){slide();},2000);
    };

    function slide(){
        now=now==imgs?0:now+=1;
        $('.slide img').eq(now-1).fadeOut();
        $('.slide img').eq(now).fadeIn();
    };
});
//fade효과 쓸 때는 css에 transition구문 없애기!!!