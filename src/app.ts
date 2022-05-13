import express, { Express, Request, Response } from 'express';

class App {
  public express: Express;

  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database(): void {

  }

  middlewares(): void {

  }

  routes(): void {
    this.express.get('/', (req: Request, res:Response) => res.end('teste'));
  }
}

export default new App().express;
