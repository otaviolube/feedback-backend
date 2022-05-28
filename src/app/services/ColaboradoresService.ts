import { Repository } from 'typeorm';
import ColaboradoresModel from '../models/ColaboradoresModel';
import AppDataSource from '../../database/data-source';

export default class ColaboradoresService {
  private colaboradoresRepository: Repository<ColaboradoresModel>;

  constructor() {
    this.colaboradoresRepository = AppDataSource.getRepository(ColaboradoresModel);
  }

  public index = async () => {
    const colaboradores = await this.colaboradoresRepository.find({
      relations: {
        funcao: true,
        area: true,
      },
    });
    return colaboradores;
  };

  public create = async (colaborador: ColaboradoresModel) => {
    const novoColaborador = await this.colaboradoresRepository.insert(colaborador);
    return novoColaborador;
  };

  public update = async (colaborador: ColaboradoresModel, id: number) => {
    const colaboradorAtualizado = await this.colaboradoresRepository.update(id, colaborador);
    return colaboradorAtualizado;
  };

  public delete = async (id: number) => {
    const colaboradorDeletado = await this.colaboradoresRepository.delete(id);
    return colaboradorDeletado;
  };
}
