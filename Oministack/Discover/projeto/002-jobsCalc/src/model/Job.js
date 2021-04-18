const database = require('../db/config');

module.exports = {
  async get(){

    // abrindo a conexão do banco de dados
    const db = await database();

    // recuperando os jobs do banco de dados
    const jobs = await db.all(`SELECT * FROM jobs`);

    // fechando a conexão
    await db.close();


    // normalizando os dados do banco de dados
    return jobs.map(job => ({
      id: job.id,
      name: job.name,
      'daily-hours': job.daily_hours,
      'total-hours': job.total_hours,
      created_at: job.created_at
    }));

  },

  async update(job, jobId){
    // abrindo conexão com banco de dados
    const db = await database();


    await db.run(` UPDATE jobs SET 
      name = "${job.name}",
      daily_hours = ${job['daily-hours']},
      total_hours = ${job['total-hours']}
      WHERE id = ${jobId}
    `)

    // fechando conexão com banco de dados
    await db.close();
  },

  delete(jobId){
    // deletando o job
    data = data.filter(job => Number(job.id) !== Number(jobId));
  },

  async create(job){
    // abrindo conexão com banco de dados
    const db = await database();
    
    await db.run(`INSERT INTO jobs (
      name,
      daily_hours,
      total_hours,
      created_at
    ) VALUES (
      '${job.name}',
      ${job['daily-hours']},
      ${job['total-hours']},
      ${job.created_at}

    )`);

    // fechando a conexão com o banco de dados
    await db.close();
  }

}