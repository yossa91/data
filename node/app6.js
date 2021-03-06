const express = require('express')
const app = express()
const port = 3000

const desc = `
    <!DOCTYPE html>
    <html lang="kr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>get test</title>
    </head>
    <body>
        <h1>get요청 테스트</h1>
        <form action="./login" method="get">
            <label for="" id="">id : </label>
            <input type="text" name="id" placeholder="id입력">
            <label for="" id="">pwd : </label>
            <input type="text" name="pwd" placeholder="pwd입력">
            <input type="submit" name="submit" value="확인">

        </form>
    </body>
    </html>
    `

app.get('/', (req, res) => {
  res.send(desc)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})