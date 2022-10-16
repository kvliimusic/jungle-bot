const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send("where was")
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("website online...")});
}

module.exports = keepAlive;
