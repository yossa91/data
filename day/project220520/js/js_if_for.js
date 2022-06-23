/*
var age = prompt('만 나이를 입력해주세요');

if( age < 14){
    document.write('14세 미만입니다.');
}else if( age < 18){
    document.write('18세 미만입니다.')
}else{
    document.write('성인입니다.');
}
*/

/*
var num = prompt('숫자입력');
var even =  num % 2;

if(0 == even){
    document.write('짝수입니다.');    
}else{
    document.write('홀수입니다.');
}
*/

/*
var now = new Date();
var mon = now.getFullYear();
var youYear  =  prompt('태어난 연도를 작성하시오');
var age = (mon - youYear)+1;

if( age < 18){
    document.write(`당신의 나이는 ${age}살로 미성년자입니다.`);
}else{
    document.write(`당신의 나이는 ${age}살로 성인입니다.`);
}
*/

/*
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();

if(hours < 12){
    if(hours == 0){
        hours = 12;
        document.write(`지금 시각은 ${hours}시 ${minutes}분으로 오전입니다.`);
    }else{
        document.write(`지금 시각은 ${hours}시 ${minutes}분으로 오전입니다.`);
    }
}else{
    hours -= 12;
    if(hours == 0){
        hours = 12;
        document.write(`지금 시각은 ${hours}시 ${minutes}분으로 오후입니다.`);
    }else{
    document.write(`지금 시각은 ${hours}시 ${minutes}분으로 오후입니다.`);
    }
}
*/

var now = new Date();
var days =  now.getDay();
var year = now.getFullYear();
var month = now.getMonth()+1;
var dats = now.getDate();
var day = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일',]

document.write(`오늘은 ${year}년 ${month}월 ${dats}일 ${day[days]}입니다.`);


setInterval(sc, 1000);
function sc(){
    var now = new Date();
    var hour = now.getHours();
    var minit = now.getMinutes();
    var second =  now.getSeconds();
    document.getElementById('times').innerHTML = `지금시각은${hour}시 ${minit}분 ${second}초입니다.`;
};