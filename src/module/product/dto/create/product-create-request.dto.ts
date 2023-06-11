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
import { IProductCreateParams } from 'src/types';
import { Category, ProductStatus } from 'src/types/enums';

export class ProductCreateRequestDto implements IProductCreateParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  photoUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Category)
  category: Category;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  count: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  geoPosition: string;

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

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
