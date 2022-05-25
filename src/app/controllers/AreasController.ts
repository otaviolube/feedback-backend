import { Request, Response } from 'express';
import AreasModel from '../models/AreasModel';
import AreasService from '../services/AreasService';

export default class EmpresasController {
  private areasService: AreasService;

  constructor() {
    this.areasService = new AreasService();
  }

  public index = async (req: Request, res: Response) => {
    const areas = await this.areasService.index();
    res.send(areas).json();
  };

  public create = async (req: Request, res: Response) => {
    const area = req.body as AreasModel;

    const novaArea = await this.areasService.create(area);
    res.send(novaArea).json();
  };

  public update = async (req: Request, res:Response) => {
    const area = req.body as AreasModel;
    const { id } = req.params;

    res.send(this.areasService.update(area, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.areasService.delete(Number(id)));
  };
}
