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
}
