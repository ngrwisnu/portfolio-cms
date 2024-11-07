import { Controller, Get, Put, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('dashboard')
export class DashboardController {
  @Get()
  @Render('dashboard/index.ejs')
  async viewDashboard() {}

  @Put('update/portfolio')
  async updatePortfolio(@Res() res: Response) {
    res.status(200).json({
      message: 'OK',
    });
  }
}
