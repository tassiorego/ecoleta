import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serialezedItems = items.map((item) => ({
      ...item,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }));

    return response.json(serialezedItems);
  }
}

export default ItemsController;