import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  ProductCreateRequestDto,
  ProductCreateResponseDto,
  ProductDeleteResponseDto,
  ProductGetAllByZipCodeRequestDto,
  ProductGetAllByZipCodeResponseDto,
  ProductGetAllRequestDto,
  ProductGetAllResponseDto,
  ProductGetResponseDto,
  ProductUpdateRequestDto,
  ProductUpdateResponseDto,
} from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: ProductCreateResponseDto })
  async create(@Body() productCreateDto: ProductCreateRequestDto) {
    const product = await this.productService.createProduct(productCreateDto);

    return new ProductCreateResponseDto(product);
  }

  @Get('/')
  @ApiResponse({ status: HttpStatus.OK, type: ProductGetAllResponseDto })
  async getAll(@Query() options: ProductGetAllRequestDto) {
    const products = await this.productService.findAllProductsWithPagination(
      options,
    );

    return new ProductGetAllResponseDto(products);
  }

  @Get('zip')
  @ApiResponse({
    status: HttpStatus.OK,
    type: ProductGetAllByZipCodeResponseDto,
  })
  async getAllByZipCode(@Query() params: ProductGetAllByZipCodeRequestDto) {
    // TODO
    console.log(params);
    const products = await this.productService.findAllProducts();

    return new ProductGetAllByZipCodeResponseDto(products);
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: ProductGetResponseDto })
  async get(@Param('id') id: number) {
    const product = await this.productService.findProductById(id);

    return new ProductGetResponseDto(product);
  }

  @Patch()
  @ApiResponse({ status: HttpStatus.OK, type: ProductUpdateResponseDto })
  async update(@Body() productUpdateDto: ProductUpdateRequestDto) {
    const { id, ...params } = productUpdateDto;

    const updatedOrder = await this.productService.updateProduct(id, params);

    return new ProductUpdateResponseDto(updatedOrder);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: ProductDeleteResponseDto })
  async delete(@Param('id') id: number) {
    const product = await this.productService.deleteProduct(id);

    return new ProductDeleteResponseDto(product);
  }

  @Post('uploadImage/:id')
  @ApiResponse({ status: HttpStatus.OK, type: String })
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(
    @UploadedFile() image: Express.Multer.File,
    @Param('id') id: number,
    @Req() req: Request,
  ) {
    return this.productService.uploadImageForProduct(
      id,
      image,
      `${req.protocol}://${req.get('Host')}/`,
    );
  }
}
