import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // rutas con id de parámetros
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Post()
  create(@Body() Payload: any) {
    return { msg: 'Categoria creada', Payload };
  }
}
