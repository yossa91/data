

function newReg(){
    //var userName = document.getElementById('nameList');
    var userName = document.querySelector('#uName');
    var newText = document.createTextNode(userName.value);
    if(userName.value != null && userName.value !=''){
        var newP = document.createElement('p'); //p태그생성
        newP.appendChild(newText);

        var delBtn = document.createElement('span');
        var delText = document.createTextNode('삭제');
        delBtn.setAttribute('class','del');
        delBtn.appendChild(delText);
        newP.appendChild(delBtn);

        var nameL = document.querySelector('#nameList');
        nameL.insertBefore(newP,nameL.childNodes[0]); //마지막 입력이 위로쌓임
        //nameL.appendChild(newP); //아래로 쌓임

        /*
        var removBtn = document.querySelectorAll('del');
        for(i = 0; i<removBtn.length; i++){
            removBtn[i].addEventListener('click',function(){
                this.parentNode.parentNode.removeChild(this.parentNode);
            });
        }
        */
        userName.value = '';
        userName.focus();

        var delParent = document.querySelectorAll('.del');
        delParent.forEach(function(el,index){
            el.onclick = function(){
                delParent[index].parentElement.remove();
            }
        });
    }else{
        alert('이름을 입력해 주세요');
    }

}



















