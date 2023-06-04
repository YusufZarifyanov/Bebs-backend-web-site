import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserNotFoundByLoginError } from 'src/shared/errors';
import { Repository } from 'typeorm';
import { CreateUserParamsInterface } from './interfaces';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByLogin(login: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        login,
      },
    });
    if (!user) {
      throw new UserNotFoundByLoginError(login);
    }

    return user;
  }

  async createUser(params: CreateUserParamsInterface): Promise<User> {
    const newUser = this.userRepository.create(params);
    await this.userRepository.save(newUser);

    return newUser;
  }

  async checkUserExistByLogin(login: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        login,
      },
    });

    return !!user;
  }
}
