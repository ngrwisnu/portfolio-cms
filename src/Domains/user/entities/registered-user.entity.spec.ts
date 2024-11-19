/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { RegisteredUser } from './registered-user.entity';

describe('registered-user entity', () => {
  it('should throw error when payload did not contain expected properties', () => {
    const payload = {
      email: 'user1@email.com',
    };

    expect(() => new RegisteredUser(payload)).toThrow(
      'REGISTERED_USER.NOT_CONTAIN_EXPECTED_PROPERTY',
    );
  });

  it('should create registered user correctly', () => {
    const payload = {
      id: '1',
      email: 'user1@email.com',
    };

    const res = new RegisteredUser(payload);

    expect(res).toStrictEqual(
      new RegisteredUser({
        id: '1',
        email: 'user1@email.com',
      }),
    );
  });
});
