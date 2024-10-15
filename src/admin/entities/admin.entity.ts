import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  full_name: string;

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

  @Column({ default: false })
  is_creator?: boolean;

  @Column({ type: 'text', nullable: true })
  description?: string;
}