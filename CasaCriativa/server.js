const express = require('express');

const server = express();


server.get('/', (req, res) =>{
    return res.sendFile(__dirname +'index.html');
}); 


// ligando o servidor.
server.listen(3000);