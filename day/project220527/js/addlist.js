
function todo(){
    var list = document.getElementById('todoList').value;
    document.getElementById('addlist').innerHTML += `<li>${list}</li>`;
    document.getElementById('todoList').value = ``;
}