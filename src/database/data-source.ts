import 'reflect-metadata';
import { DataSource } from 'typeorm';
import UserModel from '../app/models/UserModel';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'dev',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [UserModel],
  migrations: [],
  subscribers: [],
});
