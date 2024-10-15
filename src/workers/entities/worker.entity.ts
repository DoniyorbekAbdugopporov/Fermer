import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  full_name: string;

  @Column()
  birth_date: string;

  @Column()
  experience: number;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ length: 20, nullable: true })
  phone_number?: string;

  @Column({ nullable: true })
  tg_link?: string;

  @Column({ nullable: true })
  hashed_password: string;

  @Column({ nullable: true })
  hashed_refresh_token: string;

  @Column({ default: true })
  is_active?: boolean;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToMany(() => Role, (role) => role.workers)
  @JoinTable()
  roles: Role[];
}
