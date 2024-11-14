import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginDto, SignUpDto } from 'src/Domains/auth/entity/auth.dto';
import { AuthService } from './auth/auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  @Render('index.ejs')
  async root() {
    return { heading: 'Personal Website Dashboard' };
  }

  @Post('login')
  @Redirect('dashboard')
  async login(@Body() body: LoginDto, @Req() req: Request) {
    const result = await this.authService.login(body.email, body.password);

    // @ts-expect-error should be able to set user session
    req.session.user = result;
  }

  @Post('signup')
  async signup(@Body() body: SignUpDto, @Res() res: Response) {
    const result = await this.authService.signup(body.email, body.password);

    res.status(201).json({
      data: result,
    });
  }
}
