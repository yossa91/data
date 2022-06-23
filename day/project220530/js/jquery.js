$(document).ready(function(){


$('h1').css('color','red');

$('.btn').click(function(){
    $(this).addClass('txt');
});
$('.listMenu').hide();



$('.fadeout').click(function(){
    $('.pade').fadeOut();
});
$('.fadein').click(function(){
    $('.pade').fadeIn();
});
$('.fadetoggle').click(function(){
    $('.pade').fadeToggle();
});

$('.lM').click(function(){
    $('.listMenu').slideToggle();
});










});