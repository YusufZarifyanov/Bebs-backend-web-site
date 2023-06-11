import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IOrderSendParams } from 'src/types';
import { DeliveryMethod } from 'src/types/enums';

export class OrderSendRequestDto implements IOrderSendParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  deliveryAddress: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;
}
