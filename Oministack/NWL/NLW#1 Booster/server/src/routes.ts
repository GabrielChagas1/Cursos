import express from 'express';

const routes = express.Router();


// routes
routes.get('/', (request, response) =>{
    return response.json({message: 'Hello World'});
});

// exportando routes para recuperar fora desse arquivo

export default routes;