import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Product } from './product.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({
    nullable: true,
    unique: true,
  })
  login: string;

  @Column()
  password: string;

  @OneToMany(() => Product, (product: Product) => product.user)
  public products: Product[];
}
