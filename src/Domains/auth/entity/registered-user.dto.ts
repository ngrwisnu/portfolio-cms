import { User } from 'firebase/auth';

class RegisteredUser {
  uid: string;
  email: string;

  constructor(user: User) {
    this.uid = user.uid;
    this.email = user.email;
  }
}

export default RegisteredUser;
