const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/gabrielchagas.skt/', {waitUntil: 'networkidle2'});
  await page.type('input[name="username"]', 'user');
  await page.type('input[name="password"]', 'pass');
  await Promise.all([
    page.waitForNavigation({waitUntil: "networkidle2"}),
    page.click('button[type="submit"]')
  ]);

  await page.goto('https://www.instagram.com/gabrielchagas.skt/', {waitUntil: 'networkidle2'});


  // await page.type("input[placeholder='Pesquisar']", "gabrielchagas.skt");
  // await page.waitForSelector("._01UL2 .fuqBx a", {visible: true});
  // await Promise.all([
  //   page.waitForNavigation({waitUntil: "networkidle2"}),
  //   page.click("._01UL2 .fuqBx a"),
  // ]);


  const imgList = await page.evaluate(() => {
    // vamos pegar todas as imagens que estão na parte de posts
    const nodeList = document.querySelectorAll('article img');

    // transformar o Nodelist em array
    const imgArray = [...nodeList];

    // transformar os nodesa (elementos html) em objetos js
    const imgList = imgArray.map(({src}) =>({
      src
    }));

    console.log(imgList);

    return imgList;
  });

  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err  =>{
    if(err) throw new Error('something went wrong');

    console.log('well done');
  });
  


  await browser.close();
})();