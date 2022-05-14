import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()

export default class UserModel {
    @PrimaryGeneratedColumn()

      id: number;

    @Column()

      firstName: string;

    @Column()

      lastName: string;

    @Column()

      age: number;
}
