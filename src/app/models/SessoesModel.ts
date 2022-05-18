import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';

import ColaboradoresModel from './ColaboradoresModel';

@Entity()

export default class SessoesModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      token: string;

    @Column()
      sessao_status: boolean;

    @ManyToOne(() => ColaboradoresModel, (colaborador) => colaborador.sessoes)
      colaborador: ColaboradoresModel;
}
