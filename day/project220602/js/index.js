$(document).ready(function(){
/*
    $('.box').mouseenter(function(){
        $(this).animate({
            left : '700px',
            top : '400px',
            width : '100px',
            height : '100px'
        },2000);
    });
*/

    $('.box').click(function(){
        $(this).addClass('change');
    });

var c= 0;
    $('.btn_c').click(function(){
        if(c == 0){
        $('.left').animate({
            left : '-100%'
        },500);
        $('.right').animate({
            left : '100%'
        },500);
        $('.btn_c').html('close');
        $('.btn_c').animate({
            top : '30%'
        },500);
        c=1;
        }else{
            $('.left').animate({
                left : 0
            },500);
            $('.right').animate({
                left : '50%'
            },500);
            $('.btn_c').html('open');
            $('.btn_c').animate({
                top : '50px'
            },500);
            c=0;
        }
    });
});