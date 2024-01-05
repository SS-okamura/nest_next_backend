import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TaskStatus } from 'src/enums/taskStatus';

export class UpdateTaskInput {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsOptional()
  title?: string;
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  getTitle(): string {
    return this.title;
  }

  getStatus(): TaskStatus {
    return this.status;
  }
}
