


var pronts = document.testPront.pront;

function prontSelect(){
   var selectT =  pronts.options[pronts.selectedIndex].innerText;
   var testT = document.getElementById('testText').value;
   
   document.getElementById('text').innerHTML = `${testT}님 ${selectT}을 선택하셨습니다.`
   rmv();

}
function rmv(){
    document.getElementById('testText').value = '';
    document.getElementById('testText').focus();
}

console.log('innerHeight' +  window.innerHeight);
console.log('innerWidth' +  window.innerWidth);
console.log('outHeight' +  window.outerHeight);
console.log('outWidth' +  window.outerWidth);


window.onload = openUp;
function openUp(){
    var newPop = window.open('popup.html','','width = 500, height = 500');
    if(newPop == null){
        alert('팝업차단!!!');
    }
}




