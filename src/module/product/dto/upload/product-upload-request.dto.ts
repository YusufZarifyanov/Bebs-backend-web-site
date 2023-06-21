import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { IProductUploadParams } from 'src/types';

export class ProductUploadRequestDto implements IProductUploadParams {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
