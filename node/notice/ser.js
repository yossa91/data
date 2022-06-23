const http = require('http');
const fs = require('fs');

var server = http.createServer(function(request, response){

    var url = request.url;
    
    if(request.url == "/"){
        url = "/index.html";
    }
    if(request.url == '/favicon.ico'){
        Response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});

server.listen(3000);


