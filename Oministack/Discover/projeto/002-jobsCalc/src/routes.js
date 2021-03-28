const express = require('express');
const routes = express.Router();

const basePath = `${__dirname}/views`;

// route para a página de index
routes.get('/', (req, res) => res.sendFile(`${basePath}/index.html`));

// route para a página job
routes.get('/job', (req, res) => res.sendFile(`${basePath}/job.html`));

// route para a página de job-edit
routes.get('/job/edit', (req, res) => res.sendFile(`${basePath}/job-edit.html`));

// route para a página de profile
routes.get('/profile', (req, res) => res.sendFile(`${basePath}/profile.html`));


// devolvendo para fora alguma propriedades
module.exports = routes;
