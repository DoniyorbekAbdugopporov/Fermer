import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Worker } from '../../workers/entities/worker.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  role_name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToMany(() => Worker, (worker) => worker.roles)
  workers: Worker[];
}
