
const http = require('http');
const fs = require('fs');
const server = http.createServer();
//웹서버 제작

const port = 8080;
//포트번호 지정(보통 3000이상)

server.listen(port,function(){
    console.log('웹서버실해애애애애애애애앵');

});
server.on('connection',function(){
    console.log('접소오오오오오오오오옥');

});
server.on('request',function(req,res){
    console.log('요청요청요청');
    var imgFile = 'station.png';
    
    fs.readFile(imgFile,function(err,data){
        res.writeHead(200,{'Content-Type' : 'image/png; charset=utf-8'});
        res.write(data);
        res.end();
    });

});
server.on('close',function(){
    console.log('종료오오오오오오오오오------');  
});