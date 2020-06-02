import express from 'express';

import knex from './database/connection';

const routes = express.Router();


// routes

// rota para listar items
routes.get('/items', async (request, response) =>{
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            name: item.title,
            image_url: `http:\\localhost:3333/uploads/${item.image}`,
        };
    })
    
    return response.json(serializedItems);
});

// route para criar um ponto
routes.post('/points', async (request, response) =>{
    const {
        name,
        email,
        whatsapp,
        latitude,   
        longitude, 
        city,
        uf, 
        items
    } = request.body;

    // criando uma transação
    const trx = await knex.transaction();

    // incluindo ponto
    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude, 
        city,
        uf
    });

    const point_id = insertedIds[0];
    const pointItems = items.map((item_id: number) =>{
        return {
            item_id,
            point_id
        }
    })

    await trx('point_items').insert(pointItems);


    return response.json({ success: true});

});


// exportando routes para recuperar fora desse arquivo
export default routes;