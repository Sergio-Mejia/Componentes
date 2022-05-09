
//npm install express
const express = require('express')
const app = express()
const port = 3000

//punto de montaje : /hello
app.get('/hello', (req, res) => {
  res.send('Hello World111!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
var http = require('http');

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World!');
    }).listen(8080);*/



    //Promesas
    //Pug













    //Express: manejar rutas del navegador