import { Router } from 'express';
import ColaboradoresController from '../controllers/ColaboradoresController';

const ColaboradoresRouter = Router();

const colaboradoresController = new ColaboradoresController();

ColaboradoresRouter.get('/', colaboradoresController.index);
ColaboradoresRouter.post('/', colaboradoresController.create);
ColaboradoresRouter.put('/:id', colaboradoresController.update);
ColaboradoresRouter.delete('/:id', colaboradoresController.delete);

export default ColaboradoresRouter;
