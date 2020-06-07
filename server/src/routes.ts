import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Items Routes
 */
 routes.get('/items', itemsController.index);

 /**
 * Points Routes
 */
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.read);

export default routes;