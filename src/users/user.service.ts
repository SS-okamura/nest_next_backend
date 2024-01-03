import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserInput } from 'src/VO/AddUserInput';
import { User } from 'src/entities/user.entity';

import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async save(user: AddUserInput) {
    this.userRepository.save({ ...user.toArray() });
  }
}
