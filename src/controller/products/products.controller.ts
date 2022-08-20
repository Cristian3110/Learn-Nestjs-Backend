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
  ParseIntPipe,
} from '@nestjs/common';

import { ProductService } from '../../services/product/product.service';

import { response, Response } from 'express';

@Controller('products')
export class ProductsController {
  //inyectando servicios al controlador
  constructor(private productService: ProductService) {}
  //Primero los estáticos y después los dinámicos para que no choquen las rutas con Id
  @Get('filter')
  getProductFilter() {
    return `yo soy un filtro`;
  }
  // con parámetros de otra manera rápida directa
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  //Utilizando también el response desde express
  //utilizando pipes para parsear un number y no manden string
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    //?@Res() response: Response, iba arriba al lado del @Param

    // return {
    //   menssage: `product ${productId}`,
    // };
    // response.status(200).json({
    //   menssage: `Product ${productId}`,
    // });
    return this.productService.findOne(productId);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    // return {
    //   msg: `products: Limit=> ${limit}$ offset =>${offset} brand =>${brand}`,
    // };
    return this.productService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    // return { msg: 'Producto creado ', Payload };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   Payload,
    // };
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
