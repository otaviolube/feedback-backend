import { debug } from 'debug';
import AppDataSource from './data-source';

import UserModel from '../app/models/UserModel';

const initializeDB = () => {
  AppDataSource.initialize().then(async () => {
    debug('Inserting a new user into the database...');

    const user = new UserModel();

    user.firstName = 'Timber';

    user.lastName = 'Saw';

    user.age = 25;

    await AppDataSource.manager.save(user);

    debug(`Saved a new user with id: ${user.id}`);

    debug('Loading users from the database...');

    const users = await AppDataSource.manager.find(UserModel);

    debug(`Loaded users: ${users}`);

    debug('Here you can setup and run express / fastify / any other framework.');
  }).catch((error) => debug(error));
};

export default initializeDB;
