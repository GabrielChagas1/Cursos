// importando model do Job
const Job = require('../model/Job');

// importando model do profile
const Profile = require('../model/Profile');

// importando o jobUtils
const jobUtils = require('../utils/JobUtils');

module.exports = {
  index(req, res) {
    // recuperando os jobs
    const jobs = Job.get();
    
    // recuperado os dados do profile
    const profile = Profile.get();
  
    // utilizando o map para adicionar os dias que faltam e o status do job
    const updatedJobs = jobs.map((job) => {
  
      // recuperando os dias que faltam para a entrega do projeto
      const remaining = jobUtils.remainingDays(job);
  
      // recuperando o status do projeto.
      const status = remaining <= 0 ? 'done' : 'progress';
  
      return {
        ...job,
        remaining,
        status,
        budget: jobUtils.calculateBudget(job, profile["value-hour"])
      };
    });
    res.render(`index`, { jobs: updatedJobs });
  }
} 