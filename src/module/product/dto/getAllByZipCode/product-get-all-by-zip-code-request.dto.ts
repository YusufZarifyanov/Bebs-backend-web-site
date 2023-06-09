import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IProductGetAllByZipCodeParams } from 'src/types';

export class ProductGetAllByZipCodeRequestDto
  implements IProductGetAllByZipCodeParams
{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  zipCode: string;
}
