
/* */
//var answer = prompt('강의실의 호수를 적어주세요.');

/*
function quiz(answer){
    if(answer == '303'){
        printY();
    }else{
        printN();
    }
}

quiz(303);

function printY(){
    alert(`정답입니다.`);
}
function printN(){
alert(`오답입니다.`);
}
 */

var num = [1,2,3,4,5];
var char = ['a','b','c','d'];

var plus = num.concat(char);

document.write(plus);
document.write('<br/>');

num.push(7,8);//배열 추가
document.write(num);
document.write('<br/>');
document.write(plus);
document.write('<br/>');

num.unshift(0); //배열 앞에 추가
document.write(num);
document.write('<br/>');

var phone = ['010','1111','2222'];
document.write(phone.join('-'));
document.write('<br/>');

//배열
//.pop()  > 맨 뒤 요소추출
//.shift()  > 맨 앞 요소추출
//.slice()  > 숫자하나일때는 그 숫자까지 빼고 나머지출력,
//            두개일때는 첫 숫자의 자리부터 두번재 숫자의 개수까지 출력(콤마로구분)