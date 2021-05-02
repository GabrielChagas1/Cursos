const readline = require('readline-sync');
const axios = require('axios');

async function start(){
  const pokemon = searchPokemon();
  const api = await returnJSON(pokemon);
  const ability_1 = api.data.abilities[0].ability.name;
  const ability_2 = api.data.abilities[1].ability.name;
  const weight = api.data.weight;
  console.log(`
    Pokemon: ${pokemon}
    Habilidade 1 : ${ability_1}
    Habilidade 2 : ${ability_2}
    peso: ${weight}
  `);
}

async function returnJSON(pokemon){
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  return response;
}

function searchPokemon(){
  return readline.question('Digite o nome de um pokemon: ');
}

// stardando nosso projeto
start()