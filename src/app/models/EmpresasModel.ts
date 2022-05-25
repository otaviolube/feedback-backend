import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';

import AreaModel from './AreasModel';

@Entity()

export default class EmpresaModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      nome: string;

    @Column()
      site: string;

    @OneToMany(() => AreaModel, (area) => area.empresa)
      areas: AreaModel[];
}
