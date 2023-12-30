import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './Controllers/UserController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
