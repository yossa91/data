//헤더 애니메이션부분

var hov = document.querySelectorAll('.t_menu>li>a');
var hovout = document.querySelectorAll('.t_menu>li');
var hovEff = document.querySelectorAll('.t_menu>li>a>span');

hov.forEach(function(el,idx){
    hov[idx].addEventListener('mouseover',function(){
        hovEff[idx].classList.add('botLine');
        hovEff[idx].style.animationName = 'wid';
    });
    hovout[idx].addEventListener('mouseout',function(){

        hovEff[idx].style.animationName = 're';
    });
});

//partLink 애니메이션부분

document.addEventListener('scroll',function(){
    var docuTop = document.documentElement.scrollTop;
    var parLinkTop = window.pageYOffset + document.querySelector('.partLink').getBoundingClientRect().top;
    if(parLinkTop - 300 < docuTop){
        document.querySelector('.pl_left>span').style.animationName = 'left';
        document.querySelectorAll('.pl_right>article>span')[0].style.animationName = 'left';
        document.querySelectorAll('.pl_right>article>span')[1].style.animationName = 'top';
        document.querySelectorAll('.pl_right>article>span')[2].style.animationName = 'bottom';
        document.querySelectorAll('.pl_right>article>span')[3].style.animationName = 'right';
    }
});

//센터현황 마우스오버

var centerBtn = document.querySelectorAll('.ct_point>div');
var center = document.querySelectorAll('.ctWrap>article');
var centerBg = document.querySelector('.center');

centerBtn.forEach(function(el,idx){
    centerBtn[idx].addEventListener('mouseover',function(){
        for(var i= 0; i < centerBtn.length ; i++){
            center[i].classList.remove('ct_title');
            centerBg.style.animationName = '';
        }
        if(idx == 0){
            centerBg.style.backgroundImage = "url('http://pollexzone.com/images/main/mc4_loc2.jpg')";
        }else if(idx == 1){
            centerBg.style.backgroundImage = "url('http://www.pollexzone.com/images/main/mc4_loc3.jpg')";
        }else{
            centerBg.style.backgroundImage = "url('http://www.pollexzone.com/images/main/mc4_loc1.jpg')";
        }

        center[idx].className = 'ct_title';
        centerBg.style.animationName = 'opact';
    });
});

// 메인 svg 크기조절
window.onload = function() {
var windwith = document.querySelector('.inttWrap').scrollWidth;
    if(windwith < 1200){
        document.querySelector('.svg_wrap>svg').setAttribute('width', windwith-10 +'px');
    }
}
window.onresize = function(){
    var windwith = document.querySelector('.inttWrap').scrollWidth;
    if(windwith < 1200){
        document.querySelector('.svg_wrap>svg').setAttribute('width', windwith-10 +'px');
    }
    
};