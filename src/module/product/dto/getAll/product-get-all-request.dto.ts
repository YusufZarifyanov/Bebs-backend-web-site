import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';
import { IProductGetAllParams } from 'src/types';

export class ProductGetAllRequestDto implements IProductGetAllParams {
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  page?: number;

  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  size?: number;
}
