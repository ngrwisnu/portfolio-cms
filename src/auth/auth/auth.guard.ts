import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.session.user) {
      return false;
    }

    const isUserValid = /test/.test(request.session.user.email);

    if (!isUserValid) {
      return false;
    }

    return true;
  }
}
