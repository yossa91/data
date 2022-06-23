
console.log(`안녕하세요! \n오늘은 js수업 3일차입니다.`);
// \n은 줄바꿈

console.log(`탭기능입니다 \t 탭의 기능~~`);
// \t는 탭기능


var a = prompt('숫자입력1','');
var b = prompt('숫자입력2','');
var calc = a % b ;

document.write(`calc : ${a} 나누기 ${b} 의 나머지는 ${calc}`);

//증가,감소

var k = 30;
 
document.write(`<br/> ${++k}`);
document.write(`<br/> ${--k}`);
document.write(`<br/> ${k++}`);
document.write(`<br/> ${k}<br/>`);

var d = 5;
var e = 3;
document.write(d++ + e++ + '<br/>');
document.write(d++ + e++ + '<br/>');
document.write(--d + --e + '<br/>');
document.write(--d + --e + '<br/>');
document.write(++d + e++ + '<br/>');
document.write(d + e + '<br/>');

var k = 3;
var j = 5;
var n = 10;

if(k+j<=n){
    document.write(`${k}+${j}는 ${n}보다 작거나 같다`);
}else{
    document.write(`${k}+${j}는 ${n}보다 작거나 같지않다`);
}