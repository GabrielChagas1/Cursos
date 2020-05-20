const express = require('express');

const server = express();

// configurar arquivos estáticos
server.use(express.static('public'));

// configurando o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: server,
});


server.get('/', (req, res) =>{
    return res.render('index.html');
}); 

server.get('/ideias', (req, res) =>{
    return res.render('ideias.html');
}); 


// ligando o servidor.
server.listen(3000);