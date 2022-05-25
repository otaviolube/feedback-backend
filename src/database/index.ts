import { debug } from 'debug';
import AppDataSource from './data-source';

const log = debug('feedback-api:database');

const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    log(error);
  }
};

export default initializeDB;
