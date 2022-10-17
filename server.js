const { debug } = require('./config.json');
const debugLog = (string, obj) => {
	if (debug == 'on') {
		console.log('DEBUG (server.js) ---',string, obj)
	}
}

const express = require('express');
const server = express();
debugLog('imported stuff')

server.all('/', (req, res)=>{
    res.send("where was")
})

debugLog('website set up')

function keepAlive(){
    debugLog('keepAlive() called')
    server.listen(3000, ()=>{console.log("website online...")});
    debugLog('listening on website')
}

module.exports = keepAlive;
