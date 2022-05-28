import { Request, Response } from 'express';
import FuncaoModel from '../models/FuncaoModel';
import FuncoesService from '../services/FuncoesService';

export default class FuncoesController {
  private funcoesService: FuncoesService;

  constructor() {
    this.funcoesService = new FuncoesService();
  }

  public index = async (req: Request, res: Response) => {
    const funcoes = await this.funcoesService.index();
    res.send(funcoes).json();
  };

  public create = async (req: Request, res: Response) => {
    const funcao = req.body as FuncaoModel;

    const novaFuncao = await this.funcoesService.create(funcao);
    res.send(novaFuncao).json();
  };

  public update = async (req: Request, res:Response) => {
    const funcao = req.body as FuncaoModel;
    const { id } = req.params;

    res.send(this.funcoesService.update(funcao, Number(id)));
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.funcoesService.delete(Number(id)));
  };
}
