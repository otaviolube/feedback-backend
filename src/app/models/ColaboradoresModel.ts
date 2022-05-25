import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
} from 'typeorm';

import SessoesModel from './SessoesModel';
import FeedbackModel from './FeedbackModel';
import FuncaoModel from './FuncaoModel';
import AreasModel from './AreasModel';

@Entity()

export default class ColaboradoresModel {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      nome: string;

    @Column()
      email: string;

    @Column()
      senha: string;

    @OneToMany(() => SessoesModel, (sessao) => sessao.colaborador)
      sessoes: SessoesModel[];

    @OneToMany(() => FeedbackModel, (feedback) => feedback.colaborador)
      feedbacks: FeedbackModel[];

    @ManyToOne(() => FuncaoModel, (funcao) => funcao.colaboradores)
      funcao: FuncaoModel;

    @ManyToOne(() => AreasModel, (area) => area.colaboradores)
      area: AreasModel;
}
