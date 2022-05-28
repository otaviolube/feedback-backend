import { debug } from 'debug';

import express, {
  Express, Request, Response, NextFunction,
} from 'express';

import { config } from 'dotenv';
import ColaboradoresRouter from './app/routes/ColaboradoresRoutes';
import initializeDB from './database';
import EmpresasRouter from './app/routes/EmpresaRoutes';
import AreasRouter from './app/routes/AreaRoutes';
import FuncoesRouter from './app/routes/FuncaoRoutes';

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

  public async database() {
    await initializeDB();
  }

  public middlewares() {
    this.express.use(express.json());
    this.express.use((req:Request, res: Response, next:NextFunction) => {
      log(req.query, `request em: ${new Date().toISOString()}`);
      next();
    });
  }

  public routes() {
    this.express.use('/colaboradores', ColaboradoresRouter);
    this.express.use('/empresas', EmpresasRouter);
    this.express.use('/areas', AreasRouter);
    this.express.use('/funcoes', FuncoesRouter);
  }
}

export default new App().express;
