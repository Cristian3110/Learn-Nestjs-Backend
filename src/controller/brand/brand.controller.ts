import { Controller, Post, Body } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Post()
  create(@Body() Payload: any) {
    return { msg: 'Brand creado ', Payload };
  }
}
