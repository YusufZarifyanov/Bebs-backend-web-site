import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UserModule } from '../user/user.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), UserModule, FileModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
