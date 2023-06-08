import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities';
import { OrderNotFoundByIdError } from 'src/shared/errors';
import { IOrderCreateParams, IOrderUpdateParams } from 'src/types';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly userService: UserService,
  ) {}

  async createOrder(params: IOrderCreateParams): Promise<Order> {
    const user = await this.userService.findUserById(params.userId);

    const newOrder = this.orderRepository.create({
      ...params,
      user,
    });
    await this.orderRepository.save(newOrder);

    return newOrder;
  }

  async findAllOrders(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user'] });
  }

  async findOrderById(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: {
        id,
      },
      relations: ['user'],
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
    const user = await this.userService.findUserById(params.userId);
    const order = await this.findOrderById(id);

    return this.orderRepository.save({
      ...order,
      ...params,
      user,
    });
  }

  async deleteOrder(id: number): Promise<Order> {
    const order = await this.findOrderById(id);

    await this.orderRepository.delete(id);

    return order;
  }
}
