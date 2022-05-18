import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';

import ColaboradoresModel from './ColaboradoresModel';

@Entity()

export default class FeedbackModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      nota: number;

    @Column()
      comentario: string;

    @ManyToOne(() => ColaboradoresModel, (colaborador) => colaborador.feedbacks)
      colaborador: ColaboradoresModel;
}
