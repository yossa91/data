const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res, next) => {
    console.log('first middleware');
    req.myNames = 'testName';
    next();
})
app.get('/', (req, res, next) => {
    console.log('second middleware');
      res.send(`<h1>위에서 받아온~~~ ${req.myNames} 입니당- </h1>`);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})