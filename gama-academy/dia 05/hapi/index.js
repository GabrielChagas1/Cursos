const Hapi = require('@hapi/hapi');

const {StatusCodes, ReasonPhrases} = require('http-status-codes')

const init = async () =>{
    // configurando a porta e host da noss aplicação
    const server = Hapi.server({
        port: 3333,
        host: 'localhost'
    });

    // rota simples
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) =>{
            return `Hello World ${Date.now()}`
        }
    });

    // rota com erro
    server.route({
        method: 'GET',
        path: '/bad',
        handler: (request, h) =>{
            return h.response({
                message: ReasonPhrases.BAD_REQUEST
            }).code(StatusCodes.BAD_REQUEST);
        }
    });

    // rota com parametro por path
    server.route({
        method: 'GET',
        path: '/accenture/{username?}',
        handler: (request, h) =>{
            let user = request.params.username ? request.params.username : 'Aluno Accenture';
            return `Hello ${user}`
        }
    });

    // rotas com parametros por query
    server.route({
        method: 'GET',
        path: '/query',
        handler: (request, h) =>{
            let queryParams = request.query;
            return {value: queryParams}
        }
    });

    // rotas com post
    server.route({
        method: 'POST',
        path: '/signup',
        handler: (request, h) =>{
            const payload = request.payload;
            return `${payload.username}, sua conta foi criada com sucesso !`
        }
    });

    // dando start na nossa aplicação
    await server.start();
    console.log(`Server running on ${server.info.uri}`)
}

// derrubando o processo que está sendo executado se tiver algum erro e exibindo ele no console.
process.on('unhandledRejection', (err) =>{
    console.error('deu ruim aqui')
    console.log(`Error: ${err}`);
    process.exit(1)
})

init();