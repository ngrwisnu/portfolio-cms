import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { SignUpDto } from 'src/Domains/auth/entity/signup.dto';
import { AuthService } from './auth/auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  @Render('index.ejs')
  async root() {
    return { heading: 'Personal Website Dashboard' };
  }

  @Post('signup')
  async signup(@Body() body: SignUpDto, @Res() res: Response) {
    const result = await this.authService.signup(body.email, body.password);

    res.status(201).json({
      data: result,
    });
  }
}
