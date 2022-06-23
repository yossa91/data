


//슬라이드이벤트
window.onscroll = function(){
    scrollE();
}
function scrollE(){
    var cont = document.getElementById('container');
    var contHei = cont.getBoundingClientRect().top;
    console.log(contHei);
   if(contHei < 500){
    cont.style.opacity = 1;
    cont.classList.add('show');
   }else{
    cont.classList.remove('show');
    cont.style.opacity = 0;
   }
}

//아코디언메뉴

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
        var act = document.querySelectorAll('.accordion.active');
        for(var j=0; j<act.length; j++){
            act[j].classList.remove('active');
            act[j].nextElementSibling.style.maxHeight = null;
        }
        this.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 

  });
}

//셋인터벌~~~~ 지정시간마다 지정

setInterval(timer,1000);
function timer(){
    var nowDate = new Date().toLocaleTimeString();
    var dateText = document.getElementById('getTime');
    dateText.innerHTML = nowDate;

}

//
var bImg = document.querySelector('#bigImg');
var sImg = document.querySelectorAll('.smallImg');
sImg.forEach(function(el,i){
        el.onclick = function(){
        var newI = sImg[i].src;
        bImg.setAttribute('src',newI);
        for(var j=0; j< sImg.length; j++){
            sImg[j].classList.remove('liner');
        }
        sImg[i].classList.add('liner');
    }
});





