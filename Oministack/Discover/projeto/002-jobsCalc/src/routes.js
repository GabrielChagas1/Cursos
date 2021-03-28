const express = require('express');
const routes = express.Router();

// pegando o caminho absoluto das páginas
const views = `${__dirname}/views/`;

const profile = {
  name: "Gabriel",
  avatar: "https://avatars.githubusercontent.com/u/36548770?v=4",
  'monthly-budget': 300,
  'hours-per-day': 5,
  'days-per-week': 5,
  'vacation-per-year': 4,

}

// route para a página de index
routes.get('/', (req, res) => res.render(`${views}index`));

// route para a página job
routes.get('/job', (req, res) => res.render(`${views}job`));

// route para a página de job-edit
routes.get('/job/edit', (req, res) => res.render(`${views}job-edit`));

// route para a página de profile
routes.get('/profile', (req, res) => res.render(`${views}profile`, { profile }));


// devolvendo para fora alguma propriedades
module.exports = routes;
