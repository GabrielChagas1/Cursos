const express = require('express');
const routes = express.Router();

const profileController = require('./controllers/ProfileController');

// route para a página de index
routes.get('/', Job.controllers.index);

// route para a página job
routes.get('/job', Job.controllers.create);

// route para o post da página de job
routes.post('/job', Job.controllers.save);

// route para a página de job-edit
routes.get('/job/:id', Job.controllers.show);

// route para editar um job
routes.post('/job/:id', Job.controllers.update);

// route para deletar um job
routes.post('/job/delete/:id', Job.controllers.delete);

// route para a página de profile
routes.get('/profile', profileController.index);

// route para alterar os valores do profile
routes.post('/profile', profileController.update);


// devolvendo para fora alguma propriedades
module.exports = routes;