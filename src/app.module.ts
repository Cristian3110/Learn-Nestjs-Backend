import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products/products.controller';
import { CategoriesController } from './controller/categories/categories.controller';
import { OrderController } from './controller/order/order.controller';
import { UserController } from './controller/user/user.controller';
import { CustomerController } from './controller/customer/customer.controller';
import { BrandController } from './controller/brand/brand.controller';
import { ProductService } from './services/product/product.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrderController,
    UserController,
    CustomerController,
    BrandController,
  ],
  providers: [AppService, ProductService],
})
export class AppModule {}
