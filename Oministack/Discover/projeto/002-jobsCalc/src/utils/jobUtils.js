module.exports =  {
  // calculando os dias que faltam para a entrega final
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

  // calculando valor da hora
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
}