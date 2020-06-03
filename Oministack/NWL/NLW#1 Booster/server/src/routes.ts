import express from 'express';

import PointsControler from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';



const routes = express.Router();
const pointsController = new PointsControler();
const itemsController = new ItemsController();

// routes

// rota para listar items
routes.get('/items', itemsController.index);

// route para criar um ponto
routes.post('/points', pointsController.create);

// route para trazer os pontos
routes.get('/points', pointsController.index)

// route para trazer um ponto de coleta
routes.get('/points/:id', pointsController.show)

// exportando routes para recuperar fora desse arquivo
export default routes;