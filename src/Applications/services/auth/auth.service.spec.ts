import AuthRepository from 'src/Domains/auth/auth.repository';
import { AuthService } from './auth.service';
import { RegisteredUser } from 'src/Domains/user/entities/registered-user.entity';
import { LoggedInUser } from 'src/Domains/user/entities/loggedin-user.entity';

describe('AuthService', () => {
  class MockAuthRepository extends AuthRepository {
    signup = jest.fn();
    login = jest.fn();
  }

  describe('signup', () => {
    it.skip('should throw error when send an undefined argument', async () => {
      const mockAuthRepository = new MockAuthRepository();
      mockAuthRepository.signup = jest
        .fn()
        .mockImplementation(() => Promise.reject('error message'));

      const authService = new AuthService(mockAuthRepository);

      try {
        expect(mockAuthRepository.signup).toHaveBeenCalledTimes(1);
      } catch (error) {
        expect(
          authService.signup(undefined, 'example@email.com'),
        ).rejects.toThrow();
      }
    });

    it('should return registered user correctly', async () => {
      const payload = {
        id: '1',
        email: 'example@email.com',
      };

      const mockAuthRepository = new MockAuthRepository();
      mockAuthRepository.signup = jest
        .fn()
        .mockImplementation(() => Promise.resolve(payload));

      const authService = new AuthService(mockAuthRepository);
      const result = await authService.signup(payload.id, payload.email);

      expect(result).toStrictEqual(
        new RegisteredUser({
          id: payload.id,
          email: payload.email,
        }),
      );
      expect(mockAuthRepository.signup).toHaveBeenCalledTimes(1);
    });
  });

  describe('login', () => {
    it('should return logged-in user correctly', async () => {
      const payload = {
        id: '1',
        email: 'example@email.com',
      };

      const mockAuthRepository = new MockAuthRepository();
      mockAuthRepository.login = jest
        .fn()
        .mockImplementation(() => Promise.resolve(payload));

      const authService = new AuthService(mockAuthRepository);
      const result = await authService.login(payload.email, 'secret');

      expect(result).toStrictEqual(
        new LoggedInUser({
          id: payload.id,
          email: payload.email,
        }),
      );
      expect(mockAuthRepository.login).toHaveBeenCalledTimes(1);
    });
  });
});
