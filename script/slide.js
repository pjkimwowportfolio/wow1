$(function(){
    start();
    var imgs = 2;
    var now = 0;

    function start(){
        $('.slide img').eq(0).siblings().css({'left':'0'});
        setInterval(function(){slide();},2000);
    };

    function slide(){
        now=now==imgs?0:now+=1;
        $('.slide img').eq(now-1).css({'left':'-2400px'});
        $('.slide img').eq(now).css({'left':'0'});
    };
});