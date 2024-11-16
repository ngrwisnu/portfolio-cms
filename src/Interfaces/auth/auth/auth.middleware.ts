import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.session.user) {
      res.redirect('/dashboard');
    } else {
      next();
    }
  }
}
