import { Request, Response } from 'express';
import ColaboradoresModel from '../models/ColaboradoresModel';
import ColaboresService from '../services/ColaboradoresService';

export default class ColaboradoresController {
  private colaboradorService: ColaboresService;

  constructor() {
    this.colaboradorService = new ColaboresService();
  }

  public index = async (req: Request, res: Response) => {
    const colaboradores = await this.colaboradorService.index();
    res.send(colaboradores).json();
  };

  public create = async (req: Request, res: Response) => {
    const colaborador = req.body as ColaboradoresModel;
    console.log(colaborador);
    const novoColaborador = await this.colaboradorService.create(colaborador);
    res.send(novoColaborador).json();
  };

  public update = async (req: Request, res:Response) => {
    const colaborador = req.body.colaborador as ColaboradoresModel;
    const { id } = req.params;

    res.send(this.colaboradorService.update(colaborador, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.colaboradorService.delete(Number(id)));
  };
}
