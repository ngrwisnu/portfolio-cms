import {
  Controller,
  Get,
  Put,
  Render,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { isFileTypeValid } from 'src/helper/isFileTypeValid';

@Controller('dashboard')
export class DashboardController {
  @Get()
  @Render('dashboard/index.ejs')
  async viewDashboard() {}

  @Put('update/portfolio')
  @UseInterceptors(
    FileInterceptor('resume', {
      limits: { fileSize: 1.5 * 1024 * 1024 },
      fileFilter: (req, file: Express.Multer.File, cb) => {
        isFileTypeValid(file, cb);
      },
    }),
  )
  async updatePortfolio(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
