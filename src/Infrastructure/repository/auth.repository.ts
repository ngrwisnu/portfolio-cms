import { Injectable } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { gfAuth } from 'src/config/firebase';
import AuthRepository from 'src/Domains/auth/auth.repository';

@Injectable()
class AuthRepositoryFirebase extends AuthRepository {
  async signup(email: string, password: string): Promise<User> {
    try {
      const response = await createUserWithEmailAndPassword(
        gfAuth,
        email,
        password,
      );

      return response.user;
    } catch (error) {
      console.error(error.message);
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const response = await signInWithEmailAndPassword(
        gfAuth,
        email,
        password,
      );

      return response.user;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default AuthRepositoryFirebase;
