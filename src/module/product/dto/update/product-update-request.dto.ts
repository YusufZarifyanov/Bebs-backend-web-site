import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
import { IProductUpdateParams } from 'src/types';
import { Category, ProductStatus } from 'src/types/enums';

export class ProductUpdateRequestDto implements IProductUpdateParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUrl()
  photoUrl?: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  count?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  geoPosition?: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(ProductStatus)
  status?: ProductStatus;

  @ApiProperty()
  @IsOptional()
  @IsDecimal()
  oldPrice?: number;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sizes?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  colors?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  materials?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  styles?: string[];
}
