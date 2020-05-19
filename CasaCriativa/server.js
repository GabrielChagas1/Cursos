const express = require('express');

const server = express();

// configurar arquivos estáticos
server.use(express.static('public'))


server.get('/', (req, res) =>{
    return res.sendFile(__dirname +'/index.html');
}); 

server.get('/ideias', (req, res) =>{
    return res.sendFile(__dirname +'/ideas.html');
}); 


// ligando o servidor.
server.listen(3000);