import { Controller, Get, Render } from '@nestjs/common';

@Controller('login')
export class AuthController {
  @Get()
  @Render('index.ejs')
  async root() {
    return { heading: 'Personal Website Dashboard' };
  }
}
