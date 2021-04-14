const express = require('express');
const routes = express.Router();

// importando as controllers do projeto
const profileController = require('./controllers/ProfileController');
const jobController = require('./controllers/JobController');
const dashboardController = require('./controllers/DashboardController');

// route para a página de index
routes.get('/', dashboardController.index);

// route para a página job
routes.get('/job', jobController.create);

// route para o post da página de job
routes.post('/job', jobController.save);

// route para a página de job-edit
routes.get('/job/:id', jobController.show);

// route para editar um job
routes.post('/job/:id', jobController.update);

// route para deletar um job
routes.post('/job/delete/:id', jobController.delete);

// route para a página de profile
routes.get('/profile', profileController.index);

// route para alterar os valores do profile
routes.post('/profile', profileController.update);


// devolvendo para fora alguma propriedades
module.exports = routes;