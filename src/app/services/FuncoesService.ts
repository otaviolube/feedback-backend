import { Repository } from 'typeorm';
import FuncaoModel from '../models/FuncaoModel';
import AppDataSource from '../../database/data-source';

export default class FuncoesService {
  private funcaoRepository: Repository<FuncaoModel>;

  constructor() {
    this.funcaoRepository = AppDataSource.getRepository(FuncaoModel);
  }

  public index = async () => {
    const funcoes = await this.funcaoRepository.find();
    return funcoes;
  };

  public create = async (funcao: FuncaoModel) => {
    const novaFuncao = await this.funcaoRepository.insert(funcao);
    return novaFuncao;
  };

  public update = async (funcao: FuncaoModel, id: number) => {
    const funcaoAtualizada = await this.funcaoRepository.update(id, funcao);
    return funcaoAtualizada;
  };

  public delete = async (id: number) => {
    const funcaoDeletada = await this.funcaoRepository.delete(id);
    return funcaoDeletada;
  };
}
