import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities';
import { OrderNotFoundByIdError } from 'src/shared/errors';
import {
  IOrderCreateParams,
  IOrderSendParams,
  IOrderUpdateParams,
} from 'src/types';
import { Repository } from 'typeorm';
import { ProductService } from '../product/product.service';
import { OrderSendInterface } from '../product/interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly productService: ProductService,
  ) {}

  async createOrder(params: IOrderCreateParams): Promise<Order> {
    const product = await this.productService.findProductById(params.productId);

    const newOrder = this.orderRepository.create({
      ...{
        ...params,
        isActive: false,
      },
      product,
    });
    await this.orderRepository.save(newOrder);

    return newOrder;
  }

  async sendOrder(params: IOrderSendParams): Promise<OrderSendInterface> {
    const order = await this.findOrderById(params.id);

    await this.orderRepository.save({
      ...order,
      ...params,
      isActive: true,
    });

    // TODO
    const trackNumber = '11111111111';

    return {
      ...order,
      trackNumber,
    };
  }

  async findAllOrders(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['product'] });
  }

  async findOrderById(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: {
        id,
      },
      relations: ['product'],
    });

    if (!order) {
      throw new OrderNotFoundByIdError(id);
    }

    return order;
  }

  async updateOrder(
    id: number,
    params: Omit<IOrderUpdateParams, 'id'>,
  ): Promise<Order> {
    const order = await this.findOrderById(id);

    return this.orderRepository.save({
      ...order,
      ...params,
    });
  }

  async deleteOrder(id: number): Promise<Order> {
    const order = await this.findOrderById(id);

    await this.orderRepository.delete(id);

    return order;
  }
}
