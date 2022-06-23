




var itemList = [];
var addBtn = document.getElementById("add");  
addBtn.onclick = addList;



function addList(){
    var itm = document.getElementById('itmLst').value;
    itemList.push(itm);
    document.getElementById('itmLst').value = "";
    document.getElementById('itmLst').focus();
    showList();    
}

function showList() {
    var list = '<ul>';
    for (var i=0; i<itemList.length; i++) {  
        list += `<li> ${itemList[i]} <span class='close' id="${i}">X</span></li>`; 
    }
    list += "</ul>";  
    document.getElementById('itemList').innerHTML = list;

    var remove = document.getElementsByClassName("close");
    for(var i = 0; i < remove.length; i++) {
        remove[i].onclick = removeList;
    }
}


function removeList() {
    var id = this.getAttribute("id"); 
    itemList.splice(id, 1);
    showList();
}


