import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request: Request, response: Response) => {
  response.json({ message: 'Olá Mundo' });
});

app.listen(3333);
