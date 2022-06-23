const express = require('express');
const app = express();
const port = 3000;


app.use((req,res) => {
    console.log('미들웨어실행');
    //res.send('서버확인');
    var userAgent = req.header('User-Agent');
    var userHost = req.header('Host');
    var paName = req.query.name;
    var paId = req.query.id;
    var paPwd = req.query.pwd;

    var servers = `
     <h1>서버응답확인</h1>
     <h2>네트워크에서 확인<h2>
     <p>userAgent : ${userAgent}</p>
     <p>userHost : ${userHost}</p>
     <p>paName : ${paName}</p>
     <p>paId : ${paId}</p>
     <p>paPwd : ${paPwd}</p>
    `;
    
    res.send(servers);
    /*
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>서버응답 확인</h1>`);
    res.write(`<h2>네트워크에서 확인하기</h2>`);
    res.write(`<p>userAgent : ${userAgent}</p>`);
    res.write(`<p>userHost : ${userHost}</p>`);
    res.write(`<p>paName : ${paName}</p>`);
    res.write(`<p>paId : ${paId}</p>`);
    res.write(`<p>paPwd : ${paPwd}</p>`);
    res.end();
    */
});






app.listen(port, () => {
    console.log(`localhost:${port} 시자아아아ㅏ아ㅏㅏ악`);
  });
