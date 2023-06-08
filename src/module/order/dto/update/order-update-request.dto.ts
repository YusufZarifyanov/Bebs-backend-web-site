import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IOrderUpdateParams } from 'src/types';
import { DeliveryMethod } from 'src/types/enums';

export class OrderUpdateRequestDto implements IOrderUpdateParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  check?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  deliveryAddress?: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(DeliveryMethod)
  deliveryMethod?: DeliveryMethod;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  userId?: number;
}
