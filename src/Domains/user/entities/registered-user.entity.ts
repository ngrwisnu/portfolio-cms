import { IRegisteredUser } from './user.dto';

export class RegisteredUser {
  id: string;
  email: string;

  constructor(payload: RegisteredUser) {
    this.verifyPayload(payload);

    this.id = payload.id;
    this.email = payload.email;
  }

  private verifyPayload({ id, email }: IRegisteredUser) {
    if (!id || !email) {
      throw new Error('REGISTERED_USER.NOT_CONTAIN_EXPECTED_PROPERTY');
    }
  }
}
