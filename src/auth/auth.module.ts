import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth/auth.service';
import AuthRepository from 'src/Domains/auth/auth.repository';
import AuthRepositoryFirebase from 'src/Infrastructure/repository/auth.repository';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: AuthRepository,
      useClass: AuthRepositoryFirebase,
    },
  ],
})
export class AuthModule {}
