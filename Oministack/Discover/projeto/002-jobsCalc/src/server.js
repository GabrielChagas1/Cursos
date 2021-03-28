const express = require('express');
const server = express();
const routes = require('./routes');

// setando nossa view engine
server.set('view engine', 'ejs');

//middleware para configurar a rota dos meu arquivos estáticos (fotos, scripts, styles)
server.use(express.static('public'));

// utilizando as rotas criadas
server.use(routes);

// subindo um servidor na porta 3000
server.listen(3000, () => console.log(`Server running http://localhost:3000/`));