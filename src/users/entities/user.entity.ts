import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  filme: string;

  @Column()
  ano: number;

  @Column()
  assistido: string;

  @Column()
  duracao: string;

  @Column()
  nota: number;

  @Column()
  genero: string;
}
