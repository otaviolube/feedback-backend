import { Repository } from 'typeorm';
import EmpresasModel from '../models/EmpresasModel';
import AppDataSource from '../../database/data-source';

export default class EmpresasService {
  private empresasRepository: Repository<EmpresasModel>;

  constructor() {
    this.empresasRepository = AppDataSource.getRepository(EmpresasModel);
  }

  public index = async () => {
    const empresas = await this.empresasRepository.find();
    return empresas;
  };

  public create = async (empresa: EmpresasModel) => {
    const novaEmpresa = await this.empresasRepository.insert(empresa);
    return novaEmpresa;
  };

  public update = async (empresa: EmpresasModel, id: number) => {
    const empresaAtualizada = await this.empresasRepository.update(id, empresa);
    return empresaAtualizada;
  };

  public delete = async (id: number) => {
    const empresaDeletada = await this.empresasRepository.delete(id);
    return empresaDeletada;
  };
}
