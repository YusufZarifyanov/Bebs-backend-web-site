import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({
    nullable: true,
    unique: true,
  })
  login: string;

  @Column()
  password: string;
}
