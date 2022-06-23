/*
var dates = new Date();

var days = dates.getDay();
var date = dates.getDate();
var years = dates.getFullYear();

//dates.setDate(date + 100);
dates.setFullYear(years+10);
document.write(dates);
*/

//if문

var now = new Date();
var nowMonth = now.getMonth()+1;


if(3<=nowMonth && nowMonth <= 5){
    document.write(`지금은 ${nowMonth}월로 봄입니다.`); 
}else if(6<=nowMonth && nowMonth <= 8){
    document.write(`지금은${nowMonth}월로 여름입니다.`); 
}else if(8<=nowMonth && nowMonth <= 11){
    document.write(`지금은${nowMonth}월로 가을입니다.`); 
}else{
    document.write(`지금은${nowMonth}월로 겨울입니다.`); 
}

document.write(`<br/>`); 

var nowYear = now.getFullYear();
var yrYear = nowYear % 12;
var resultList = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',');
var result;
/*
if(yrYear == 0){
    result='원숭이';
}else if(yrYear == 1){
    result='닭';
}else if(yrYear == 2){
    result='개';
}else if(yrYear == 3){
    result='돼지';
}else if(yrYear == 4){
    result='쥐';
}else if(yrYear == 5){
    result='소';
}else if(yrYear == 6){
    result='호랑이';
}else if(yrYear == 7){
    result='토끼';
}else if(yrYear == 8){
    result='용';
}else if(yrYear == 9){
    result='뱀';
}else if(yrYear == 10){
    result='말';
}else{
    result='양';
}*/

document.write(`${nowYear}년은 ${resultList[yrYear]}의 해입니다.`); 
document.write(`<br/>`); 

//var score = prompt('점수');
score = 70;
var sc = Number(score);

(60 <= sc) ? document.write('통과') : document.write('재시험'); 

document.write(`<br/>`); 

var fruits = '3';

switch(fruits){
    case '1' : document.write('사과를 고르셨습니다.');
    break;
    case '2': document.write('배를 고르셨습니다.');
    break; 
    case '3': document.write('귤을 고르셨습니다.');
    break;     
}
document.write(`<br/>`); 

var season = '3';

switch(fruits){
    case '1' : document.write('봄을 좋아하시는군요.');
    break;
    case '2': document.write('여름을 좋아하시는군요.');
    break; 
    case '3': document.write('가을을 좋아하시는군요.');
    break;    
    default :  document.write('겨울을 좋아하시는군요.');
    break;
}

document.write(`<br/>`); 
if(season == '1'){
    document.write('봄을 좋아하시는군요.');
}else if(season == '2'){   
    ocument.write('여름을 좋아하시는군요.');
}
else if(season == '3'){
    document.write('가을을 좋아하시는군요.');
}  
else{
    document.write('겨울을 좋아하시는군요.');
}

