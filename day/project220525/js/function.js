
function duble(){
    var aa = document.getElementById('aaa').value;
    var bb = document.getElementById('bbb').value;
    return document.getElementById('res').innerHTML = aa*bb;
}
//

function addNum(a,b){
    var sum = 0;
    var leng = 6;
    for(var i = a; i< b+1; i++){
        sum += i;
    }
    document.write(sum);
}

addNum(1,5);
document.write('<br/>');

//
var num = [20,15,05,120,45];

function min(numT){
    var output = numT[0];
    for(var value of numT){
        if(output > value){
            output = value;
        }
    }
    return output;
}
document.write('최소값은 ' + min(num));
