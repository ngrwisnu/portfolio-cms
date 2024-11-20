import { ILoggedInUser } from './user.dto';

export class LoggedInUser {
  id: string;
  email: string;

  constructor(payload: ILoggedInUser) {
    this.verifyPayload(payload);

    this.id = payload.id;
    this.email = payload.email;
  }

  private verifyPayload({ id, email }: ILoggedInUser) {
    if (!id || !email) {
      throw new Error('LOGGED_IN_USER.NOT_CONTAIN_EXPECTED_PROPERTY');
    }
  }
}
