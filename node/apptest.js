const express = require('express')
const app = express()
const port = 3000
app.use(express.static('notice'));


//하단폴더까지 마운트
app.use(express.static('notice'));


app.get('/', function(req, res){
    res.sendFile(index.html);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

