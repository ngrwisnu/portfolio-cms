import { BadRequestException, Injectable } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { gfAuth } from 'src/config/firebase';
import AuthRepository from 'src/Domains/auth/auth.repository';
import { LoggedInUser } from 'src/Domains/user/entities/loggedin-user.entity';
import { RegisteredUser } from 'src/Domains/user/entities/registered-user.entity';

@Injectable()
class AuthRepositoryFirebase extends AuthRepository {
  async signup(email: string, password: string): Promise<RegisteredUser> {
    try {
      const response = await createUserWithEmailAndPassword(
        gfAuth,
        email,
        password,
      );

      return new RegisteredUser({
        id: response.user.uid,
        email: response.user.email,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login(email: string, password: string): Promise<LoggedInUser> {
    try {
      const response = await signInWithEmailAndPassword(
        gfAuth,
        email,
        password,
      );

      return new LoggedInUser({
        id: response.user.uid,
        email: response.user.email,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}

export default AuthRepositoryFirebase;
