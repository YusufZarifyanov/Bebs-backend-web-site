import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IOrderCreateParams } from 'src/types';
import { DeliveryMethod } from 'src/types/enums';

export class OrderCreateRequestDto implements IOrderCreateParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  check: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  deliveryAddress: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(DeliveryMethod)
  deliveryMethod?: DeliveryMethod;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
