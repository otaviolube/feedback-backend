import { Router } from 'express';
import FuncoesController from '../controllers/FuncoesController';

const FuncoesRouter = Router();

const funcoesController = new FuncoesController();

FuncoesRouter.get('/', funcoesController.index);
FuncoesRouter.post('/', funcoesController.create);
FuncoesRouter.put('/:id', funcoesController.update);
FuncoesRouter.delete('/:id', funcoesController.delete);

export default FuncoesRouter;
