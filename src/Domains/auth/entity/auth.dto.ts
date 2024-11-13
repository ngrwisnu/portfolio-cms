import { User } from 'firebase/auth';

export class SignUpDto {
  email: string;
  password: string;
}

export class LoginDto {
  email: string;
  password: string;
}

export class RegisteredUser {
  uid: string;
  email: string;

  constructor(user: User) {
    this.uid = user.uid;
    this.email = user.email;
  }
}

export class LoggedInUser {
  uid: string;
  email: string;
  accessToken: string;

  constructor(user: User, token: string) {
    this.uid = user.uid;
    this.email = user.email;
    this.accessToken = token;
  }
}
