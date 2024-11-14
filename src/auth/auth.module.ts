import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth/auth.service';
import AuthRepository from 'src/Domains/auth/auth.repository';
import AuthRepositoryFirebase from 'src/Infrastructure/repository/auth.repository';
import { AuthMiddleware } from './auth/auth.middleware';

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
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      {
        path: '/signup',
        method: RequestMethod.ALL,
      },
      {
        path: '/login',
        method: RequestMethod.ALL,
      },
    );
  }
}
