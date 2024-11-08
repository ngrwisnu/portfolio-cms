import { Injectable } from '@nestjs/common';
import StorageRepository from 'src/Domains/storage/storage.repository';

@Injectable()
export class DashboardService {
  constructor(private storageService: StorageRepository<string>) {}

  async add(filename: string): Promise<{ [key: string]: string }> {
    const res = await this.storageService.add(filename);

    return res;
  }
}
