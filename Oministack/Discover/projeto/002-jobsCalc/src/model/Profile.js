const database = require('../db/config');

module.exports = {
  async get() {
    // iniciando o banco de dados
    const db = await database();

    // buscando informações do profile
    const profile = await db.get(`SELECT * FROM profile`);

    // fechando a conexão
    await db.close();

    return {
      name: profile.name,
      avatar: profile.avatar,
      'monthly-budget': profile.monthly_budget,
      'days-per-week': profile.days_per_week,
      'hours-per-day': profile.hours_per_day,
      'vacation-per-year': profile.vacation_per_year,
      'value-hour': profile.value_hour
    };
  },

  async update(profile){
    // abrindo a conexão com o bando de dados
    const db = await database();

    // atualizando no banco de dados
    db.run(`UPDATE profile SET 
            name = "${profile.name}",
            avatar = "${profile.avatar}",
            monthly_budget = ${profile['monthly-budget']},
            days_per_week = ${profile['days-per-week']},
            hours_per_day = ${profile['hours-per-day']},
            vacation_per_year = ${profile['vacation-per-year']},
            value_hour = ${profile['value-hour']}
  `);

    // fechando a conexão
    await db.close();
  }
}