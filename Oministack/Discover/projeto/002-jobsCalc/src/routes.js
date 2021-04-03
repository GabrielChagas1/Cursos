const { Router } = require('express');
const express = require('express');
const routes = express.Router();

// pegando o caminho absoluto das páginas
const views = `${__dirname}/views/`;

const profile = {
  name: "Gabriel",
  avatar: "https://github.com/gabrielchagas1.png",
  'monthly-budget': 300,
  'hours-per-day': 5,
  'days-per-week': 5,
  'vacation-per-year': 4,

}

const jobs = [];

// route para a página de index
routes.get('/', (req, res) => res.render(`${views}index`));

// route para a página job
routes.get('/job', (req, res) => res.render(`${views}job`));

// route para o post da página de job
routes.post('/job', (req, res) => {
  // var {name, 'daily-hours', 'total-hours'  } = req.body;
  const job = req.body;
  job.createAt = new Date.now() //atribuindo uma data de criação do registro
  jobs.push(req.body);
  return res.redirect('/');

})

// route para a página de job-edit
routes.get('/job/edit', (req, res) => res.render(`${views}job-edit`));

// route para a página de profile
routes.get('/profile', (req, res) => res.render(`${views}profile`, { profile }));


// devolvendo para fora alguma propriedades
module.exports = routes;
