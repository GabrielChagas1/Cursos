const express = require('express');
const server = express();
const routes = require('./routes');

const path = require('path');

// setando nossa view engine
server.set('view engine', 'ejs');

// mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'));

//middleware para configurar a rota dos meu arquivos estáticos (fotos, scripts, styles)
server.use(express.static('public'));

// habilitando nosso body das requisições serem em json
server.use(express.urlencoded({ extended: true }));

// utilizando as rotas criadas
server.use(routes);

// subindo um servidor na porta 3000
server.listen(3000, () => console.log(`Server running http://localhost:3000/`));