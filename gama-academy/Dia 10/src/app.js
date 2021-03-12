const server = require('./server')


server.then(hapi =>{
    hapi.start();
    console.log(`Server Running http://${process.env.HOST}:${process.env.PORT}`);
})