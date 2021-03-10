const Hapi = require('@hapi/hapi');

require('../configs/env');

const routes = require('./routes');

const server = () =>{
    const hapiServer = Hapi.server({
        port: process.env.Port || 3333,
        host: process.env.HOST || 'localhost'
    });

    hapiServer.route(routes)

    return hapiServer
}

process.on('unhandledRejection', (err) =>{
    console.error('deu ruim aqui')
    console.log(`Error: ${err}`);
    process.exit(1)
})

module.exports = server();