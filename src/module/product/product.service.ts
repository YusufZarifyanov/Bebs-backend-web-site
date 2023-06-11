import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities';
import { ProductNotFoundByIdError } from 'src/shared/errors';
import { IProductCreateParams, IProductUpdateParams } from 'src/types';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly userService: UserService,
  ) {}

  async createProduct(params: IProductCreateParams): Promise<Product> {
    const user = await this.userService.findUserById(params.userId);

    const newProduct = this.productRepository.create({
      ...params,
      user,
    });
    await this.productRepository.save(newProduct);

    return newProduct;
  }

  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['user'] });
  }

  async findProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
      relations: ['user'],
    });

    if (!product) {
      throw new ProductNotFoundByIdError(id);
    }

    return product;
  }

  async updateProduct(
    id: number,
    params: Omit<IProductUpdateParams, 'id'>,
  ): Promise<Product> {
    const product = await this.findProductById(id);

    return this.productRepository.save({
      ...product,
      ...params,
    });
  }

  async deleteProduct(id: number): Promise<Product> {
    const product = await this.findProductById(id);

    await this.productRepository.delete(id);

    return product;
  }
}
