import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from '../../Applications/services/dashboard/dashboard.service';
import StorageRepository from 'src/Domains/storage/storage.repository';
import StorageRepositoryFirebase from 'src/Infrastructure/repository/storage.repository';

@Module({
  controllers: [DashboardController],
  providers: [
    DashboardService,
    {
      provide: StorageRepository,
      useClass: StorageRepositoryFirebase,
    },
  ],
})
export class DashboardModule {}
