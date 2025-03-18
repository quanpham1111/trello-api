const express = require('express')
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('<h1> Hello world Nodejs NguyenquanDev</h1>')
})

app.listen(port, hostname, () => {
  console.log(`hello NguyenquanDev, I'am runing server at http://${hostname}:${port}/`);
})
