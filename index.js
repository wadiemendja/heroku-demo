const express = require("express");
const http = require("http");
const app = express();
const server = http.Server(app);

const PORT = process.env.PORT || 8080;
app.get('/', function(req,res){
    res.send("Hello World !!!")
});

server.listen(PORT, function() {
  console.log('server running at localhost:'+PORT);
});