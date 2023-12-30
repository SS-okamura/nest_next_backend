import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('name')
  getName(): object {
    return { name: 'test' };
  }

  @Post('create')
  create(@Req() request: ParameterDecorator) {
    console.log(request);
  }
}
