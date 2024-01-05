import { IsEmpty, IsEnum, IsString } from 'class-validator';
import { TaskStatus } from 'src/enums/taskStatus';

export class CreateTaskInput {
  @IsEmpty()
  @IsString()
  private _title: string;
  @IsEmpty()
  @IsEnum(TaskStatus)
  private _status: TaskStatus = TaskStatus.waiting;

  getTitle(): string {
    return this._title;
  }

  getStatus(): TaskStatus {
    return this._status;
  }
}
