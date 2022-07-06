


var change = 1;
document.addEventListener('scroll', function() {
    var placeTop = window.pageYOffset + document.querySelector('.place').getBoundingClientRect().top;
    var scrollHei = document.documentElement.scrollTop;
    var list = document.querySelectorAll('.placeList ul a');
    
    if(150 < scrollHei){
        if(change == 1){
            change = 0;
            document.querySelector('#nvMenu').id = "nvMenuDw";
            document.getElementsByTagName('nav')[0].className = 'downMenu';
            document.querySelector('.hd_menu').style.display = 'none';
            document.querySelector('.hd_user').style.display = 'none';
            document.querySelector('#hTop').style.display = 'none';
            document.querySelector('#hTop').style.display = 'none';
            document.querySelector('.nv_menu').className = 'nv_menuDw';
            document.getElementsByTagName('header')[0].style.height = document.getElementsByTagName('nav')[0].clientHeight + 'px';
        }else{
            change = 0;
        }
    }else if(150 > scrollHei){   
        
        if(change == 0){
            change = 1;
            document.querySelector('#nvMenuDw').id = "nvMenu";
            document.getElementsByTagName('nav')[0].className = '';
            document.querySelector('.hd_menu').style.display = 'block';
            document.querySelector('.hd_user').style.display = 'flex';
            document.querySelector('#hTop').style.display = 'block';
            document.querySelector('.nv_menuDw').className = 'nv_menu';
            document.getElementsByTagName('header')[0].style.height =  document.getElementsByTagName('header')[0].scrollHeight+ 'px';
        }else{
            change = 1;
        }

    }else if(placeTop - 300 < scrollHei){   
        for(var i = 0; i<list.length; i++){
            list[i].style.animationName = 'mymove';
        }
    }

});