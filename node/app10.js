const express = require('express');
const app = express();
const port = 3000;

const homes = require('./routes/route.js');
app.use('/', homes); //미들웨어

app.set('views' , __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



module.exports = app;



