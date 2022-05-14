import express, { Express, Request, Response } from 'express';

import { config } from 'dotenv';
import initializeDB from './database';

config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
});

class App {
  public express: Express;

  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database(): void {
    initializeDB();
  }

  middlewares(): void {

  }

  routes(): void {
    this.express.get('/', (req: Request, res:Response) => res.end('teste'));
  }
}

export default new App().express;
