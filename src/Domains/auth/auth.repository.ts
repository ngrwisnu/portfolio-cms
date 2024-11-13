import { User } from 'firebase/auth';

abstract class AuthRepository {
  abstract signup(email: string, password: string): Promise<User>;
}

export default AuthRepository;
