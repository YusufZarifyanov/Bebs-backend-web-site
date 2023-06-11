import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import {
  OrderCreateRequestDto,
  OrderCreateResponseDto,
  OrderDeleteResponseDto,
  OrderGetAllResponseDto,
  OrderGetResponseDto,
  OrderSendRequestDto,
  OrderSendResponseDto,
  OrderUpdateRequestDto,
  OrderUpdateResponseDto,
} from './dto';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: OrderCreateResponseDto })
  async create(@Body() orderCreateDto: OrderCreateRequestDto) {
    const order = await this.orderService.createOrder(orderCreateDto);

    return new OrderCreateResponseDto(order);
  }

  @Post('send')
  @ApiResponse({ status: HttpStatus.OK, type: OrderSendResponseDto })
  async send(@Body() orderSendDto: OrderSendRequestDto) {
    const orderSendInfo = await this.orderService.sendOrder(orderSendDto);

    return new OrderSendResponseDto(orderSendInfo);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: OrderGetAllResponseDto })
  async getAll() {
    const orders = await this.orderService.findAllOrders();

    return new OrderGetAllResponseDto(orders);
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: OrderGetResponseDto })
  async get(@Param('id') id: number) {
    const order = await this.orderService.findOrderById(id);

    return new OrderGetResponseDto(order);
  }

  @Patch()
  @ApiResponse({ status: HttpStatus.OK, type: OrderUpdateResponseDto })
  async update(@Body() orderUpdateDto: OrderUpdateRequestDto) {
    const { id, ...params } = orderUpdateDto;

    const updatedOrder = await this.orderService.updateOrder(id, params);

    return new OrderUpdateResponseDto(updatedOrder);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: OrderDeleteResponseDto })
  async delete(@Param('id') id: number) {
    const order = await this.orderService.deleteOrder(id);

    return new OrderDeleteResponseDto(order);
  }
}
