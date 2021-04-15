const Job = require('../model/Job');

const jobUtils = require('../utils/JobUtils');

const Profile = require('../model/Profile');

module.exports = {
  save(req, res){

    // recuperando todos os jobs
    const jobs = Job.get();

    // recuperando o id do último elemento dentro de jobs
    let lastId = jobs[jobs.length - 1]?.id || 0;
  
    //criando um novo job 
    Job.create({
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
    // recuperando os jobs
    const jobs = Job.get();

    // recuperando os dados de profile
    const profile = Profile.get();

    // recuperando o id passado como parametro
    const jobId = req.params.id;
    
    // recuperando o job, pelo id recebido
    const job = jobs.find(job => Number(job.id) === Number(jobId) );

    // se o id for inválido ou não existir, ele retorna um erro
    if(!job){
      return res.send('Job not found!');
    }

    // recuperando o valor do projeto
    job.budget = jobUtils.calculateBudget(job, profile["value-hour"]);

    // renderizando a página de job-edit
    res.render(`job-edit`, { job })
  },

  update(req, res){
    // recuperando os jobs
    const jobs = Job.get();

    // recuperando o id do job para editar
    const jobId = req.params.id;

    // recuperando o job que corresponde ao id recebido
    const job = jobs.find(job => Number(job.id) === Number(jobId));

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
    const newJobs = jobs.map(job => { 
      if(Number(job.id) === Number(jobId)){
        job = updateJob;
      }
      return job
    });

    // atualizando os jobs
    Job.update(newJobs);

    // redirecionando para a página de detalhes do job
    res.redirect(`/job/${job.id}`);
  },

  delete(req, res){
    // recuperando o id do jovem que veio por parametro
    const jobId = req.params.id;

    // passando o jobId para deletar o job
    Job.delete(jobId);

    // redirecionando para a página principal
    return res.redirect('/')
  }

}