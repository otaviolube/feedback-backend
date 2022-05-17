import { debug } from 'debug';
import App from './app';

const log = debug('feedback-api:server');

App.listen(process.env.APP_PORT || 3000, () => log('Servidor rodando perfeitamente ...'));
