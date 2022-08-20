import { Controller, Post, Body } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Post()
  create(@Body() Payload: any) {
    return { msg: 'Customer creado ', Payload };
  }
}
