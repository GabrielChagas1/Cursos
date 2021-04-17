const Profile = require('../model/Profile');

module.exports = {
  
  async index(req, res){
    res.render(`profile`, { profile: await Profile.get() })
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


    //TODO: refatorar o cálculo do valor de horas

    Profile.update({
      ...Profile.get(),
      ...req.body,
      'value-hour': valueHour
    });
    return res.redirect('/profile');
  }
}