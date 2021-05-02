const readline = require('readline-sync');
const axios = require('axios');

const terminalImage = require('terminal-image');
const got = require('got');


async function start(){
  const house = searchHouse();
  const api = await getPersonsHouse(house);
  const results = api.data;
  for (let i = 0; i < results.length; i++) {
    console.log(`
      Nome: ${results[i].name}
      Patronus: ${results[i].patronus}
    `);
    const body = await got(`${results[i].image}`).buffer();
    console.log(await terminalImage.buffer(body, {width: 100, height: 100, preserveAspectRatio: false}));
  }

}


async function getPersonsHouse(house){
  const persons = axios.get(`http://hp-api.herokuapp.com/api/characters/house/${house}`);
  return persons;
}

function searchHouse(){
  return readline.question(`
    gryffindor, hufflepuff, ravenclaw, slytherin  

    Digite o nome de uma casa no harry potter: `);
}

// dando start no nosso projeto
start();