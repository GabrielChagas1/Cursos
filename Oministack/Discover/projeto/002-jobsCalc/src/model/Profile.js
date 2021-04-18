const database = require('../db/config');

module.exports = {
  async get() {
    // iniciando o banco de dados
    const db = await database();

    // buscando informações do profile
    const profile = await db.get(`SELECT * FROM profile`);

    // fechando a conexão
    db.close();

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

  update(newData){
    data = newData;
  }
}