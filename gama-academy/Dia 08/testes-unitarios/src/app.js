const server = require('./server');

server.start();
// dando start na nossa aplicação
console.log(`Server running on ${server.info.uri}`)