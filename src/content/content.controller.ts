import { Controller, Get, Req } from '@nestjs/common';
import { ContentService } from './content/content.service';
import { Request } from 'express';

@Controller('api/v1')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Get('content')
  async get(@Req() req: Request): Promise<{ data: any }> {
    const data = await this.contentService.get();
    const url = `${req.protocol}://${req.get('host')}/docs/${data.filename || ''}`;

    return {
      data: url,
    };
  }
}
