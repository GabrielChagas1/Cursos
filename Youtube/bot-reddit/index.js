const puppeteer = require('puppeteer');
const fs = require('fs');

let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://old.reddit.com/r/cats/')
  const result = await page.evaluate(() => {

    // criando um array para salvar os dados
    const scores = [];
  
    // varrendo todos os elementos que tenha a classe thing
    document.querySelectorAll('.thing').forEach((score) =>{

      // verificando se o score da thread é maior ou igual a  5000
      if(score.getAttribute('data-score') >= 5000){
        // add a constante scores os seguintes dados
        scores.push({
          // recuperando o score
          dataScore: score.getAttribute('data-score'),
          // recuperando a categoria
          subReddit: score.getAttribute('data-subreddit'),
          // recuperando o title
          title: score.getElementsByClassName('may-blank')[1].innerText,
          // recuperando o link que leva para comments
          comments: score.getAttribute('data-permalink'),
          // recuperando o link que leva para a  thread 
          threadUrl: score.getAttribute('data-permalink')
        });
      }
             
    });

    return scores;
  })
  browser.close()
  return result
}
scrape().then((value) => {

  // transformando o retorno em um JSON
  let results = JSON.stringify(value, null, 2);

  // escrevendo o resultado em um arquivo
  fs.writeFile('reddit.json', results, (err, data) =>{

    // se der erro no console aparece o erro
    if (err) throw err;

    // senão aparece que o arquivo foi escrito com sucesso
   console.log('Data Written to file');

  })

})