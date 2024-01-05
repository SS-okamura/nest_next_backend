import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateTaskInput } from './VO/CreateTaskInput';
import { UpdateTaskInput } from './VO/UpdateTaskInput';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async readAllTasks(): Promise<Task[]> {
    const selectedTasks = await this.tasksRepository.find();
    return selectedTasks;
  }

  async createTask(input: CreateTaskInput): Promise<InsertResult> {
    const task = new Task(input.getTitle(), input.getStatus());
    const newTask = await this.tasksRepository.insert(task);
    return newTask;
  }

  async updateTask(input: UpdateTaskInput): Promise<UpdateResult> {
    const task = new Task(input.getTitle(), input.getStatus());
    const updateTask = await this.tasksRepository.update(input.id, task);
    return updateTask;
  }

  async deleteTask(taskId: number) {
    const deleteTask = await this.tasksRepository.delete(taskId);
    return deleteTask;
  }
}
