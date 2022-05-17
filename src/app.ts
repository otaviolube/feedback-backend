import { debug } from 'debug';

import express, {
  Express, Request, Response, NextFunction,
} from 'express';

import { config } from 'dotenv';
import initializeDB from './database';

const log = debug('feedback-api:app');

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
    this.express.use((req:Request, res: Response, next:NextFunction) => {
      log(req.query, `request em: ${new Date().toISOString()}`);
      next();
    });
    this.express.get('/', (req: Request, res:Response) => res.end('teste'));
  }
}

export default new App().express;
