const Job = require('../model/Job');

const jobUtils = require('../utils/JobUtils');

const Profile = require('../model/Profile');

module.exports = {
  async save(req, res){

    // let lastId = jobs[jobs.length - 1]?.id || 0;
  
    //criando um novo job 
    await Job.create({
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

  async show(req, res) {
    // recuperando os jobs
    const jobs = await Job.get();

    // recuperando os dados de profile
    const profile = await Profile.get();

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

  async update(req, res){
    // recuperando os jobs
    const jobId = req.params.id;

    // constante com o job atualizado.
    const updateJob = {
      name: req.body.name,
      'total-hours': req.body['total-hours'],
      'daily-hours': req.body['daily-hours']
    }

    // atualizando os jobs
    Job.update(updateJob, jobId);

    // redirecionando para a página de detalhes do job
    res.redirect(`/job/${jobId}`);
  },

  async delete(req, res){
    // recuperando o id do jovem que veio por parametro
    const jobId = req.params.id;

    // passando o jobId para deletar o job
    await Job.delete(jobId);

    // redirecionando para a página principal
    return res.redirect('/')
  }
}