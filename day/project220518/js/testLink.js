
var test1 = "3.14" + 10;
var test = typeof(test1);
console.log(test , test1);

var season = {
    봄 : '따땃함',
    여름 : '더움',
    가을 : '선선함',
    겨울 : '츕'
};
console.log(season.봄);
console.log(Object.keys(season));
var seasonLeng = Object.keys(season);

for(var i=0; i< seasonLeng.length; i++){
    console.log(season[seasonLeng[i]]);
}