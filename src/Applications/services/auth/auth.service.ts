import { Injectable } from '@nestjs/common';
import AuthRepository from 'src/Domains/auth/auth.repository';
import { LoggedInUser } from 'src/Domains/user/entities/loggedin-user.entity';
import { RegisteredUser } from 'src/Domains/user/entities/registered-user.entity';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signup(email: string, password: string): Promise<RegisteredUser> {
    const user = await this.authRepository.signup(email, password);

    return new RegisteredUser(user);
  }

  async login(email: string, password: string): Promise<LoggedInUser> {
    const user = await this.authRepository.login(email, password);

    return new LoggedInUser(user);
  }
}
