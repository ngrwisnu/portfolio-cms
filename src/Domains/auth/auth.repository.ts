import { RegisteredUser } from '../user/entities/registered-user.entity';
import { LoggedInUser } from '../user/entities/loggedin-user.entity';

abstract class AuthRepository {
  abstract signup(email: string, password: string): Promise<RegisteredUser>;
  abstract login(email: string, password: string): Promise<LoggedInUser>;
}

export default AuthRepository;
