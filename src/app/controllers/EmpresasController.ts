import { Request, Response } from 'express';
import EmpresasModel from '../models/EmpresasModel';
import EmpresasService from '../services/EmpresasService';

export default class EmpresasController {
  private empresasService: EmpresasService;

  constructor() {
    this.empresasService = new EmpresasService();
  }

  public index = async (req: Request, res: Response) => {
    const empresas = await this.empresasService.index();
    res.send(empresas).json();
  };

  public create = async (req: Request, res: Response) => {
    const empresa = req.body as EmpresasModel;

    const novaEmpresa = await this.empresasService.create(empresa);
    res.send(novaEmpresa).json();
  };

  public update = async (req: Request, res:Response) => {
    const empresa = req.body as EmpresasModel;
    const { id } = req.params;

    res.send(this.empresasService.update(empresa, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.empresasService.delete(Number(id)));
  };
}
