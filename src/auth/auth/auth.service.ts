import { Injectable } from '@nestjs/common';
import AuthRepository from 'src/Domains/auth/auth.repository';
import { LoggedInUser, RegisteredUser } from 'src/Domains/auth/entity/auth.dto';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signup(email: string, password: string): Promise<RegisteredUser> {
    const user = await this.authRepository.signup(email, password);

    return new RegisteredUser(user);
  }

  async login(email: string, password: string): Promise<LoggedInUser> {
    const user = await this.authRepository.login(email, password);
    const tk = await user.getIdToken();

    return new LoggedInUser(user, tk);
  }
}
