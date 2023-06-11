import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Category, ProductStatus } from 'src/types/enums';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  photoUrl: string;

  @Column({
    type: 'enum',
    enum: Category,
  })
  category: Category;

  @Column({
    type: 'float',
  })
  price: number;

  @Column({
    type: 'int',
  })
  count: number;

  @Column()
  geoPosition: string;

  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: ProductStatus.CREATED,
  })
  status: ProductStatus;

  @Column({
    nullable: true,
    type: 'float',
  })
  oldPrice: number;

  @Column('text', { array: true, default: '{}' })
  sizes: string[];

  @Column('text', { array: true, default: '{}' })
  colors: string[];

  @Column('text', { array: true, default: '{}' })
  materials: string[];

  @Column('text', { array: true, default: '{}' })
  styles: string[];

  @OneToMany(() => Order, (order: Order) => order.product)
  public orders: Order[];

  @ManyToOne(() => User, (user: User) => user.id, { onDelete: 'CASCADE' })
  public user: User;
}
