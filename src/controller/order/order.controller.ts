import { Controller, Body, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Post()
  create(@Body() Payload: any) {
    return { msg: 'Nueva porden creada', Payload };
  }
}
