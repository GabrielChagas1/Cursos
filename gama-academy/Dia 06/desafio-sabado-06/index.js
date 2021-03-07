const Hapi = require('@hapi/hapi');
const fetch = require('node-fetch');
const {StatusCodes, ReasonPhrases} = require('http-status-codes')
const People = require('./models/People');


// função para recuperar os dados do personagem
async function getPerson(id){
  return fetch(`https://swapi.dev/api/people/${id}`)
  .then(response =>  response.json())
  .then(person =>{
      let planetUrl = person.homeworld;
      return fetch(planetUrl)
      .then(response => response.json())
      .then(home =>{
        person.homeworld = home.name;
        return person
      })
  });
}

const init = async () =>{
    const server = Hapi.server({
        port: 3333,
        host: 'localhost'
    });

    server.route({
      method: 'GET',
      path: '/people/{id}',
      handler: async (request, h) =>{

        // recuperando o id que é passada pela URL
        let userId = request.params.id;

        if(userId === '')
          h.response({
            message: ReasonPhrases.NOT_FOUND,
          }).code(StatusCodes.NOT_FOUND);

        // recuperando o nome, planeta e URL
        let {name, homeworld, url} = await getPerson(userId);

        // pesquisando se já tem um registro com esse nome
        let people = await People.findOne({
          where: {name},
        });

        // se tiver ele retorna a variável people
        if(people){
          return people;
        }else{
          // senão tiver ele cria um registro no banco com as informações novas
          let newPeople = People.create({
            name,
            homeworld,
            url 
          });

          return newPeople;
        }
      }
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
}

// derrubando o processo que está sendo executado se tiver algum erro e exibindo ele no console.
process.on('unhandledRejection', (err) =>{
  console.error('deu ruim aqui')
  console.log(`Error: ${err}`);
  process.exit(1)
})

init();