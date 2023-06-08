import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Order } from './order.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({
    nullable: true,
    unique: true,
  })
  login: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order: Order) => order.user)
  public order: Order[];
}
