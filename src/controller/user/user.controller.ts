import { Controller, Body, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  create(@Body() Payload: any) {
    return { msg: 'Nuevo Usuario creado ', Payload };
  }
}
