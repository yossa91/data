
window.onload = function(){


    var change = document.querySelector('.box');
    var btn = document.getElementById('btn');
    var i = 0;
    var color = ['#549012','#892223','#238345','#122223'];

    function bg(){
        change.style.backgroundColor = color[i];
        i++;
        if(i == color.length){
            i=0;
        }
    }

    btn.onclick = function(){
        bg();
    }

}