import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IOrderCreateParams } from 'src/types';

export class OrderCreateRequestDto implements IOrderCreateParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  check: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
