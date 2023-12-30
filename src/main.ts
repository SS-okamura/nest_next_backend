import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Controller, Get, Query } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

@Controller('user')
export class AppController {
  @Get('name')
  getName(@Query() query: { text: string }): string {
    return query.text;
  }
}
