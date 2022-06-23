var arr = [];

function addI(){
    var item  = document.getElementById('list').value;
    arr.push(item);
    document.getElementById('list').value = "";
    document.getElementById('list').focus();
    showL();
}

function showL(){
    var li = '<ul>'
    for(i=0; i<arr.length; i++){
        li += `<li> ${arr[i]}<span class="close" id="${i}" > X </span> </li>`
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