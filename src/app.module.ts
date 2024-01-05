import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';
import { UsersModule } from './users/user.module';
import { TaskModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    UsersModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
