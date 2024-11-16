import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Interfaces/auth/auth.module';
import { DashboardModule } from './Interfaces/dashboard/dashboard.module';
import { ContentModule } from './Interfaces/content/content.module';

@Module({
  imports: [AuthModule, DashboardModule, ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
