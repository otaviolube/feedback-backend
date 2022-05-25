import { Router } from 'express';
import EmpresasController from '../controllers/EmpresasController';

const EmpresasRouter = Router();

const empresasController = new EmpresasController();

EmpresasRouter.get('/', empresasController.index);
EmpresasRouter.post('/', empresasController.create);
EmpresasRouter.put('/:id', empresasController.update);
EmpresasRouter.delete('/:id', empresasController.delete);

export default EmpresasRouter;
