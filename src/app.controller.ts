import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'Que hay bro';
  }

  // con parámetros
  // @Get('/products/:productoId')
  // getProduct(@Param() params: any) {
  //   return `product ${params.productoId}`;
  // }

  //Primero los estáticos y después los dinámicos para que no choquen las rutas con Id
  @Get('/products/filter')
  getProductFilter() {
    return `yo soy un filtro`;
  }
  // con parámetros de otra manera rápida directa
  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  // rutas con id de parámetros
  @Get('/categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `products: Limit=> ${limit}$ offset =>${offset} brand =>${brand}`;
  }
}
