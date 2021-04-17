// importando model do Job
const Job = require('../model/Job');

// importando model do profile
const Profile = require('../model/Profile');

// importando o jobUtils
const jobUtils = require('../utils/JobUtils');

module.exports = {
  async index(req, res) {
    // recuperando os jobs
    const jobs = Job.get();
    
    // recuperado os dados do profile
    const profile = await Profile.get();

    const statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    };

    // guardar o valor total de horas por dia de cada job em progresso
    let jobTotalHours = 0;

    // utilizando o map para adicionar os dias que faltam e o status do job
    const updatedJobs = jobs.map((job) => {
  
      // recuperando os dias que faltam para a entrega do projeto
      const remaining = jobUtils.remainingDays(job);
  
      // recuperando o status do projeto.
      const status = remaining <= 0 ? 'done' : 'progress';

      // somando a quantidade de status
      statusCount[status] ++;

      // se o status for progress, a variável jobTotalHours vai ser atualizada
      jobTotalHours = status === 'progress' ? jobTotalHours += Number(job['daily-hours']) : jobTotalHours;
  
      return {
        ...job,
        remaining,
        status,
        budget: jobUtils.calculateBudget(job, profile["value-hour"])
      };
    });

    
    // quantidade de horas disponiveis no dia
    const freeHours = profile['hours-per-day'] - jobTotalHours;

    res.render(`index`, { jobs: updatedJobs, profile, statusCount, freeHours});



    // const statusCount = {
    //   progress: updatedJobs.filter(x => x.status === 'progress').length,
    //   done: updatedJobs.filter(x => x.status === 'done').length,
    //   total: updatedJobs.length
    // }


  }
} 