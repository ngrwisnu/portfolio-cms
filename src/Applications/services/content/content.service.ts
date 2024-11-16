import { Injectable } from '@nestjs/common';
import StorageRepository from 'src/Domains/storage/storage.repository';

@Injectable()
export class ContentService {
  constructor(private storageRepository: StorageRepository<string>) {}

  async get(): Promise<{ [key: string]: string }> {
    const res = await this.storageRepository.get();

    return res;
  }
}
