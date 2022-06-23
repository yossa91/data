var http = require('http');
var fs = require('fs');
const { URLSearchParams } = require('url');
const port = 3000;


var server = http.createServer(function(req, res) {

    if(req.method == 'GET'){
        fs.readFile('./login_get.html' ,function(error, data) {
            res.writeHead(200, {'Content-Type' : 'text/html ; charset= utf-8'});
            res.end(data);
        });
    }else if(req.method == 'POST'){
        req.on('data', function(chunk){
            console.log(chunk.toString());
            var data = new URLSearchParams(chunk.toString());
            res.writeHead(200, {'Content-Type' : 'text/html ; charset= utf-8'});
            res.end('id : ' + data.id + 'pwd : ' + data.pwd);
        });
    }

    
});

server.listen(port, function(){
    console.log("서버시작");    
});
