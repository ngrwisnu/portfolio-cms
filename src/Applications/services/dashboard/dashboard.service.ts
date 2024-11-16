import { Injectable } from '@nestjs/common';
import StorageRepository from 'src/Domains/storage/storage.repository';

@Injectable()
export class DashboardService {
  constructor(private storageRepository: StorageRepository<string>) {}

  async add(filename: string): Promise<{ [key: string]: string }> {
    const res = await this.storageRepository.add(filename);

    return res;
  }

  async get(): Promise<{ [key: string]: string }> {
    const res = await this.storageRepository.get();

    return res;
  }

  async remove(filename: string) {
    await this.storageRepository.delete(filename);
  }
}
