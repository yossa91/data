var arr = [];

function addI(){
    var item  = document.getElementById('list').value;
    if(item != null && item != ''){
        arr.push(item);
        document.getElementById('list').value = "";
        document.getElementById('list').focus();
        showL();
    }else{
        alert('리스트를 작성해주세요');
    }

}

function showL(){
    var li = '<ul>'
    for(i=0; i<arr.length; i++){
        li += `<li> ${arr[i]}<span onClick='color(this)' class="color">V</span><span class="close" id="${i}" > X </span> </li>`
    }
    li += '</ul>'
    document.querySelector('#addList').innerHTML = li;
    var del = document.getElementsByClassName('close');
    for(i = 0; i < del.length; i++){
        del[i].onclick = removeList;
    }

}

function removeList(){
    var XId = this.getAttribute('id');
    arr.splice(XId,1);
    showL();
}

function color(ele){
    ele.parentElement.style.backgroundColor = 'yellow';
}