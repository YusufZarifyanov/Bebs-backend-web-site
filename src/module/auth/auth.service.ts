import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  AuthUncorrectPasswordError,
  AuthLoginExistError,
} from 'src/shared/errors';
import { User } from 'src/entities';
import { AuthLoginResponseInterface } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(login: string, password: string): Promise<User> {
    const checkUserExist = await this.userService.checkUserExistByLogin(login);
    if (checkUserExist) {
      throw new AuthLoginExistError(login);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await this.userService.createUser({
      login,
      password: hashedPassword,
    });

    return createdUser;
  }

  async login(
    login: string,
    password: string,
  ): Promise<AuthLoginResponseInterface> {
    const user = await this.userService.findUserByLogin(login);

    await this.verifyPasswords(password, user.password);

    return this.generateToken(user.id);
  }

  async verifyPasswords(
    password: string,
    hashedPassword: string,
  ): Promise<void> {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordMatch) {
      throw new AuthUncorrectPasswordError();
    }
  }

  generateToken(userId: number): AuthLoginResponseInterface {
    const payload = { userId };

    return {
      token: this.jwtService.sign(payload),
      userId: payload.userId,
    };
  }
}
