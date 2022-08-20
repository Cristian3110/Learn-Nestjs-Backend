import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { response, Response } from 'express';

@Controller('products')
export class ProductsController {
  //Primero los estáticos y después los dinámicos para que no choquen las rutas con Id
  @Get('filter')
  getProductFilter() {
    return `yo soy un filtro`;
  }
  // con parámetros de otra manera rápida directa
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  //Utilizando también el response desde express
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    // return {
    //   menssage: `product ${productId}`,
    // };
    response.status(200).json({
      menssage: `Product ${productId}`,
    });
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return {
      msg: `products: Limit=> ${limit}$ offset =>${offset} brand =>${brand}`,
    };
  }

  @Post()
  create(@Body() Payload: any) {
    return { msg: 'Producto creado ', Payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() Payload: any) {
    return {
      id,
      Payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `El producto ${id} ha sido eliminado`,
    };
  }
}
