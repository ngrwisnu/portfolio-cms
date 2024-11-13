import { Injectable } from '@nestjs/common';
import AuthRepository from 'src/Domains/auth/auth.repository';
import RegisteredUser from 'src/Domains/auth/entity/registered-user.dto';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signup(email: string, password: string): Promise<RegisteredUser> {
    const user = await this.authRepository.signup(email, password);

    return new RegisteredUser(user);
  }
}
