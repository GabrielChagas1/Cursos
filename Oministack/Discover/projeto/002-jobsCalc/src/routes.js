const {
  Router
} = require('express');
const express = require('express');
const routes = express.Router();

// pegando o caminho absoluto das páginas
// const views = `${__dirname}/views/`;

const Profile = {
  data: {
    name: "Gabriel",
    avatar: "https://github.com/gabrielchagas1.png",
    'monthly-budget': 1500,
    'hours-per-day': 5,
    'days-per-week': 5,
    'vacation-per-year': 4,
    'value-hour': 70,
  },

  controllers:{
    index(req, res){
      res.render(`profile`, { profile: Profile.data })
    },
    
    update(req, res){
      // req.body para pegar os dados
      const data = req.body;

      // definir quantas semanas tem no ano
      const weeksPerYear = 52;

      // remover as semanas de férias do ano, para pegar pegar quantas semanas tem em um mês
      const weeksPerMonth = (weeksPerYear - data['vacation-per-year']) / 12;

      // total de horas trabalhadas na semana
      const weekTotalHours = data["hours-per-day"] * data["days-per-week"];

      // horas trabalhadas no mês
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;

      // valor da hora
      const valueHour = data["monthly-budget"] / monthlyTotalHours;

      // Profile.data = data;
      Profile.data = {
        ...Profile.data,
        ...req.body,
        'value-hour': valueHour
      }

      return res.redirect('/profile');

    }
  },

  services:{

  }
}

const Job = {
  data: [
    {
      id: 1,
      name: "Pizzaria Guloso",
      'daily-hours': 2,
      'total-hours': 1,
      created_at: 1617753484744,
    },
    {
      id: 2,
      name: "Newsletter Otis Brasil",
      'daily-hours': 2,
      'total-hours': 10,
      created_at: 1617753484744,
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
          budget: Job.services.calculateBudget(job, Profile.data["value-hour"])
        };
      });
      res.render(`index`, { jobs: updatedJobs });
    },

    save(req, res){
      // recuperando o id do último elemento dentro de jobs
      let lastId = Job.data[Job.data.length - 1]?.id || 0;
    
      //dando um push para dentro do objeto jobs 
      Job.data.push({
        id: ++lastId,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        created_at: Date.now()
      });
    
      // redirecioando para a home
      return res.redirect('/');
    },

    create(req, res){ 
      return res.render(`job`) 
    },

    show(req, res) {

      // recuperando o id passado como parametro
      const jobId = req.params.id;
      
      // recuperando o job, pelo id recebido
      const job = Job.data.find(job => Number(job.id) === Number(jobId) );

      // se o id for inválido ou não existir, ele retorna um erro
      if(!job){
        return res.send('Job not found!');
      }

      // recuperando o valor do projeto
      job.budget = Job.services.calculateBudget(job, Profile.data["value-hour"]);

      // renderizando a página de job-edit
      res.render(`job-edit`, { job })
    },

    update(req, res){
      // recuperando o id do job para editar
      const jobId = req.params.id;

      // recuperando o job que corresponde ao id recebido
      const job = Job.data.find(job => Number(job.id) === Number(jobId));

      // se o job não for encontrado é enviado uma mensagem de erro
      if(!job){
        return res.send('Job Not Found!');
      }

      // constante com o job atualizado.
      const updateJob = {
        ...job,
        name: req.body.name,
        'total-hours': req.body['total-hours'],
        'daily-hours': req.body['daily-hours']

      }

      // map para atualizar o job
      Job.data = Job.data.map(job => { 
        if(Number(job.id) === Number(jobId)){
          job = updateJob;
        }
        return job
      });

      // redirecionando para a página de detalhes do job
      res.redirect(`/job/${job.id}`);
    },

    delete(req, res){
      const jobId = req.params.id;

      Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId));

      return res.redirect('/')
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
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
  },
}

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
routes.get('/profile', Profile.controllers.index);

// route para alterar os valores do profile
routes.post('/profile', Profile.controllers.update);




// devolvendo para fora alguma propriedades
module.exports = routes;