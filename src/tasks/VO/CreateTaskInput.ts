import { IsEmpty, IsEnum, IsString } from 'class-validator';
import { TaskStatus } from 'src/enums/taskStatus';

export class CreateTaskInput {
  @IsEmpty()
  @IsString()
  private title: string;
  @IsEmpty()
  @IsEnum(TaskStatus)
  private status: TaskStatus = TaskStatus.waiting;

  constructor(title: string, status: TaskStatus) {
    this.title = title;
    this.status = status;
  }

  getTitle(): string {
    return this.title;
  }

  getStatus(): TaskStatus {
    return this.status;
  }
}
