import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { ProductModule } from './module/product/product.module';
import { OrderModule } from './module/order/order.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StripeModule } from './module/stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    ProductModule,
    OrderModule,
    StripeModule.forRoot(process.env.STRIPE_KEY, { apiVersion: '2022-11-15' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
