/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { LoggedInUser } from './loggedin-user.entity';

describe('loggedin-user entity', () => {
  it('should throw error when payload did not contain expected properties', () => {
    const payload = {
      email: 'user1@email.com',
    };

    expect(() => new LoggedInUser(payload)).toThrow(
      'LOGGED_IN_USER.NOT_CONTAIN_EXPECTED_PROPERTY',
    );
  });

  it('should create logged-in user correctly', () => {
    const payload = {
      id: '1',
      email: 'user1@email.com',
    };

    const res = new LoggedInUser(payload);

    expect(res).toStrictEqual(
      new LoggedInUser({
        id: '1',
        email: 'user1@email.com',
      }),
    );
  });
});
