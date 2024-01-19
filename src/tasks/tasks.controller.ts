import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './VO/CreateTaskInput';
import { UpdateTaskInput } from './VO/UpdateTaskInput';
import { getTaskStatusFromString } from 'src/enums/taskStatus';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  /**
   * 全件取得	http://localhost:3000/task	GET
   * 1件追加	http://localhost:3000/task	POST
   * 1件更新	http://localhost:3000/task	PUT
   * 1件削除	http://localhost:3000/task/:id	DELETE
   */

  @Get()
  readAllTasks() {
    return this.tasksService.readAllTasks();
  }

  @Post()
  async createTodo(@Body() input: { title: string; status: string }) {
    const task = new CreateTaskInput(
      input.title,
      getTaskStatusFromString(input.status),
    );
    return this.tasksService.createTask(task);
  }

  @Put()
  async updateTask(@Body() input: UpdateTaskInput) {
    return this.tasksService.updateTask(input);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }
}
