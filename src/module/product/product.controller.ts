import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  ProductCreateRequestDto,
  ProductCreateResponseDto,
  ProductDeleteResponseDto,
  ProductGetAllResponseDto,
  ProductGetResponseDto,
  ProductUpdateRequestDto,
  ProductUpdateResponseDto,
} from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

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

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: ProductGetAllResponseDto })
  async getAll() {
    const products = await this.productService.findAllProducts();

    return new ProductGetAllResponseDto(products);
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
}
