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

  @Column({
    nullable: true,
  })
  deliveryAddress?: string | null;

  @Column({
    type: 'enum',
    enum: DeliveryMethod,
    nullable: true,
  })
  deliveryMethod?: DeliveryMethod | null;

  @Column({
    type: 'float',
  })
  price: number;

  @ManyToOne(() => Product, (product: Product) => product.id, {
    onDelete: 'CASCADE',
  })
  public product: Product;
}
