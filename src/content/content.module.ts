import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content/content.service';
import StorageRepository from 'src/Domains/storage/storage.repository';
import StorageRepositoryFirebase from 'src/Infrastructure/repository/storage.repository';

@Module({
  controllers: [ContentController],
  providers: [
    ContentService,
    {
      provide: StorageRepository,
      useClass: StorageRepositoryFirebase,
    },
  ],
})
export class ContentModule {}
