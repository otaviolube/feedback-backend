import 'reflect-metadata';
import { DataSource } from 'typeorm';
import FeedbackModel from '../app/models/FeedbackModel';
import SessoesModel from '../app/models/SessoesModel';
import ColaboradoresModel from '../app/models/ColaboradoresModel';
import FuncaoModel from '../app/models/FuncaoModel';
import AreasModel from '../app/models/AreasModel';
import EmpresaModel from '../app/models/EmpresasModel';

export default new DataSource({
  type: 'sqlite',
  database: './src/database/database.db',
  synchronize: true,
  logging: false,
  entities: [
    ColaboradoresModel,
    SessoesModel,
    FuncaoModel,
    FeedbackModel,
    AreasModel,
    EmpresaModel,
  ],
  migrations: [],
  subscribers: [],
});
