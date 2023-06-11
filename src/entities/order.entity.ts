import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DeliveryMethod } from 'src/types/enums';
import { Product } from './product.entity';

@Entity({ name: 'order' })
export class Order extends BaseEntity {
  @Column({
    unique: true,
  })
  check: string;

  @Column()
  deliveryAddress: string;

  @Column({
    type: 'enum',
    enum: DeliveryMethod,
    default: DeliveryMethod.CREATED,
  })
  deliveryMethod: DeliveryMethod;

  @Column({
    type: 'float',
  })
  price: number;

  @ManyToOne(() => Product, (product: Product) => product.id, {
    onDelete: 'CASCADE',
  })
  public product: Product;
}
