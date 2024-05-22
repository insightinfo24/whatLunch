import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'history' })
export class History {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { length: 50 })
  first: string;

  @Column('varchar', { length: 50 })
  second: string;

  @Column('varchar', { length: 50 })
  third: string;

  @Column({ type: 'int' })
  pickNum: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
