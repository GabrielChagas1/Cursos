const {
  Router
} = require('express');
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
  'value-hour': 75,

}

const Job = {
  data: [
    {
      id: 1,
      name: "Pizzaria Guloso",
      'daily-hours': 2,
      'total-hours': 1,
      created_at: 1617753484744
    },
    {
      id: 2,
      name: "Newsletter Otis Brasil",
      'daily-hours': 2,
      'total-hours': 10,
      created_at: 1617753484744
    }
  ],

  controllers: {
    index(req, res) {
      const updatedJobs = Job.data.map((job) => {

        // recuperando os dias que faltam para a entrega do projeto
        const remaining = Job.services.remainingDays(job);

        // recuperando o status do projeto.
        const status = remaining <= 0 ? 'done' : 'progress';

        return {
          ...job,
          remaining,
          status,
          budget: profile["value-hour"] * job["total-hours"]
        };
      });
      res.render(`${views}index`, { jobs: updatedJobs });
    },

    save(req, res){
      // recuperando o id do último elemento dentro de jobs
      let lastId = Job.data[Job.data.length - 1]?.id || 1;
    
      //dando um push para dentro do objeto jobs 
      jobs.push({
        id: lastId++,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        created_at: Date.now()
      });
    
      // redirecioando para a home
      return res.redirect('/');
    },

    create(req, res){ 
      return res.render(`${views}job`) 
    }

  },

  services: {
    remainingDays(job) {
      // horas total do projeto -> toFixed()
      const remainingDays = (job['total-hours'] / job['daily-hours']);
    
      // recuperando a data que foi criado o job
      const createdDate = new Date(job.created_at);
    
      // recuperando o dia do vencimento
      const dueDay = createdDate.getDate() + Number(remainingDays);
    
      // recuperando a data do vencimento em milisegundos
      const dueDateMiliseconds = createdDate.setDate(dueDay);
    
      // recuperando o total de dias para o vencimento em miliseconds
      const timeMiliseconds = dueDateMiliseconds - Date.now()
    
      // dias em milisegundos
      const dayMiliseconds = 1000 * 60 * 60 * 24;
    
      // dias restantes para a entrega
      const remainigDay = (timeMiliseconds / dayMiliseconds).toFixed();
    
      return remainigDay
    }
  },
}

// route para a página de index
routes.get('/', Job.controllers.index);

// route para a página job
routes.get('/job', Job.controllers.create);

// route para o post da página de job
routes.post('/job', Job.controllers.save);

// route para a página de job-edit
routes.get('/job/edit', (req, res) => res.render(`${views}job-edit`));

// route para a página de profile
routes.get('/profile', (req, res) => res.render(`${views}profile`, {
  profile
}));


// devolvendo para fora alguma propriedades
module.exports = routes;