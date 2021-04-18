let data =  [
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
];

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

  update(newJob){
    data = newJob;
  },

  delete(jobId){
    // deletando o job
    data = data.filter(job => Number(job.id) !== Number(jobId));
  },

  create(newJob){
    data.push(newJob);
  }

}