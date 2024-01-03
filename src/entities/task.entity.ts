import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum TaskStatus {
  waiting = 'waiting',
  running = 'running',
  done = 'done',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: TaskStatus })
  status: TaskStatus;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  constructor(title: string) {
    this.title = title;
  }
}
