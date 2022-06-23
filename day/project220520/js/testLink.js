var txt = '안녕하세요';
var leng  = '문자열 길이';

document.write(txt[2] + '<br/>');
document.write(leng.length);

document.write( '<br/>');

/*
var num1 = prompt('숫자입력', '' );
var num2 = prompt('숫자입력', '');
var num11 = Number(num1);
var num22 = Number(num2);
var sum = num11 + num22;

document.write(sum);
*/

var bot = prompt('가로길이','3');
var hei = prompt('세로길이','10');
var botNum = Number(bot);
var heiNum = Number(hei);
var sq = 2*(botNum + heiNum);

document.write(`입력받은 사각형의 둘레는 ${sq} 입니다.`);
