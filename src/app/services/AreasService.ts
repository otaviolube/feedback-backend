import { Repository } from 'typeorm';
import AreasModel from '../models/AreasModel';
import AppDataSource from '../../database/data-source';

export default class AreasService {
  private areasRespository: Repository<AreasModel>;

  constructor() {
    this.areasRespository = AppDataSource.getRepository(AreasModel);
  }

  public index = async () => {
    const areas = await this.areasRespository.find();
    return areas;
  };

  public create = async (area: AreasModel) => {
    const novaArea = await this.areasRespository.insert(area);
    return novaArea;
  };

  public update = async (area: AreasModel, id: number) => {
    const areaAtualizada = await this.areasRespository.update(id, area);
    return areaAtualizada;
  };

  public delete = async (id: number) => {
    const areaDeletada = await this.areasRespository.delete(id);
    return areaDeletada;
  };
}
