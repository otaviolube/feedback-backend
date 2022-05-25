import { Router } from 'express';
import AreasController from '../controllers/AreasController';

const AreasRouter = Router();

const areasController = new AreasController();

AreasRouter.get('/', areasController.index);
AreasRouter.post('/', areasController.create);
AreasRouter.put('/:id', areasController.update);
AreasRouter.delete('/:id', areasController.delete);

export default AreasRouter;
