
var idxNum = document.querySelectorAll('.list>ul>li');



idxNum.forEach(function(el,index){
    el.onclick = function(evt){
       var target = document.querySelectorAll('.box>div');
       target[index].style.backgroundColor = 'red';
       var tgName = evt.target.className;
       console.log(tgName);
    }
});


