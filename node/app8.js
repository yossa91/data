const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res, next) => {
    console.log('first middleware');
    res.send({name : "이름",
             age : "50",
            date : "22.05.06"});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})