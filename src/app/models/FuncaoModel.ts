import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';

import ColaboradoresModel from './ColaboradoresModel';

@Entity()

export default class FuncaoModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      nome: string;

    @Column()
      descricao: string;

    @OneToMany(() => ColaboradoresModel, (colaborador) => colaborador.funcao)
      colaboradores: ColaboradoresModel[];
}
