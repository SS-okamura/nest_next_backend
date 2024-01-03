import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { AddUserInput } from 'src/VO/AddUserInput';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('name')
  getName(): object {
    return { name: 'test' };
  }

  @Post('create')
  create(@Body() body: { name: string; email: string; password: string }) {
    console.log('ここから');
    console.log(body);
    const user = new AddUserInput(body.name, body.email, body.password);
    this.userService.save(user);
    return { name: body.name };
  }
}
