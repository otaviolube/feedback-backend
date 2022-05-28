import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
} from 'typeorm';

import ColaboradoresModel from './ColaboradoresModel';
import EmpresaModel from './EmpresasModel';

@Entity()

export default class AreaModel {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      nome: string;

    @Column()
      descricao: string;

    @OneToMany(() => ColaboradoresModel, (colaborador) => colaborador.area)
      colaboradores: ColaboradoresModel[];

    @ManyToOne(() => EmpresaModel, (empresa) => empresa.areas)
      empresa: EmpresaModel;
}
