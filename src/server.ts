import { debug } from 'debug';
import App from './app';

App.listen(process.env.APP_PORT || 3000, () => debug('Servidor rodando perfeitamente ...'));
