import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
} from 'typeorm';

import SessoesModel from './SessoesModel';
import FeedbackModel from './FeedbackModel';
import FuncaoModel from './FuncaoModel';
import AreaModel from './AreaModel';

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

    @ManyToOne(() => AreaModel, (area) => area.colaboradores)
      area: AreaModel;
}
