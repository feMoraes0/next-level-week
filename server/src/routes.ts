import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({'message': 'hello world'});
});

routes.get('/items', async (request, response) => {
  const items = await knex('items').select('*');
  return response.json({'message': 'hello world'});
});

export default routes;