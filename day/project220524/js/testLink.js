

var browser = "chrome";

switch(browser){
    case "chrome":document.write(`크롬브라우저를 사용중이십니다.`);
    break;
    case "safari":document.write(`사파리브라우저를 사용중이십니다.`);
    break;
    case "edge":document.write(`엣지브라우저를 사용중이십니다.`);
    break;
    case "firefox":document.write(`파이어폭스브라우저를 사용중이십니다.`);
    break;
    case "opr":document.write(`오페라브라우저를 사용중이십니다.`);
    break;
}

document.write(`<br/>`);

var brw = ['chrome','safari','edge','firefox','opr'];
var arr = 0;
if(brw[arr] == "chrome" || brw[arr] == "safari"){
    document.write(`서비스가 지원되는 브라우저입니다.`);
}else {
    document.write(`서비스가 지원되지 않는 브라우저입니다. 크롬이나 사파리를 이용해주세요`);
}

document.write(`<br/>`);

for(var i = 0; i<10; i++){
    document.getElementById('txtbox').innerHTML +=`test${i+1} <br/>`;
}

var fruits = ['딸기','사과','귤','수박','오렌지'];
for(var i = fruits.length; i > 0; i--){
    document.getElementById('txtbox').innerHTML +=`${i}번째 과일은 ${fruits[i-1]} <br/>`;
}

for(var i = 2; i<10; i++){
    document.getElementById('txtbox').innerHTML +=`<h4>${i}단</h4>`;
    for(var j = 1; j<10; j++){
        if(j==9){
            document.getElementById('txtbox').innerHTML +=`${i}x${j}=${i*j}`;
        }else{
            document.getElementById('txtbox').innerHTML +=`${i}x${j}=${i*j} | `;
        }
       
    }
    document.getElementById('txtbox').innerHTML +=`<br/>`;
}

var star = [''];

for(var i = 0; i<9; i++){
    star[i] = '*';
    document.getElementById('txtbox').innerHTML +=`<br/>`;
    for(var j=0 ; j<star.length; j++){
        document.getElementById('txtbox').innerHTML +=`${star[j]}`;
    }
}

document.getElementById('txtbox').innerHTML +=`<br/><br/><br/>`;

var st ='';
for(var j = 1; j < 10; j++){
    for(var a = 10; a > j; a--){
        st += '&nbsp';
    }
    for(var i = 0; i < 2*j-1; i++){
        st +='*';
    }
    st += '<br/>';
}
document.getElementById('txtbox').innerHTML +=`${st}`;
