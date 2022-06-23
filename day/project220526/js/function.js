/*
function btn(){
    document.getElementById('bt').style.backgroundColor = 'red';
    document.getElementById('bbb').innerHTML +='test';
}


function listup(){
    document.getElementsByClassName('ullist')[0].style.display = 'block';
}

document.write('<br/>');

function volume(w,h){
    var vol = w*w*h*3.14;
    document.write(vol);
}
volume(3,4);

document.write('<br/>');

var sum = 0;
for(var i =0; i<101; i++){
    sum +=i;
}
document.write(sum);

*/
/*
var book = {
    title : '책제목',
    authur : '저자',
    page : '300',
    price : '2000원',
    info : function(){
        document.write(this.title + '은 어떤 내용입니다.');
    }
};
document.write(book.page + '<br/>');
book.info();

*/




for(var i = 0; i < document.images.length; i++){
    document.write(`이미지의 개수는 ${document.images.length}<br/>`);
    document.write(`src : ${document.images[i].src} <br/>`);
    document.write(`src : ${document.images[i].width}<br/>`);
    document.write(`src : ${document.images[i].alt}<br/>`);
}





