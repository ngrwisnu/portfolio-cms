import {
  Controller,
  Get,
  Put,
  Render,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { isFileTypeValid, publicStorage } from 'src/helper/multer';
import { DashboardService } from './dashboard/dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  @Render('dashboard/index.ejs')
  async viewDashboard() {}

  @Put('update/portfolio')
  @UseInterceptors(
    FileInterceptor('resume', {
      storage: publicStorage,
      limits: { fileSize: 1.5 * 1024 * 1024 },
      fileFilter: (req, file: Express.Multer.File, cb) => {
        isFileTypeValid(file, cb);
      },
    }),
  )
  async updatePortfolio(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    console.log(file);

    const result = await this.dashboardService.add(file.filename);

    res.status(201).json({
      message: result.message,
    });
  }
}
