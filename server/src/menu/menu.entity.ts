import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'menus' })
export class Menu {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 50 })
  contents: string;

  @Column({ default: false })
  isExclude: boolean;

  @Column({ type: 'int' })
  weight: number;

  @Column('varchar', { default: '', length: 50 })
  etc: string;
}
