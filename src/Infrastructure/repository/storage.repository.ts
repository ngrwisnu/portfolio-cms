import { gfDatabase } from 'src/config/firebase';
import { ref, set } from 'firebase/database';
import StorageRepository from 'src/Domains/storage/storage.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
class StorageRepositoryFirebase extends StorageRepository<string> {
  add(filename: string): Promise<{ [key: string]: string }> {
    return set(ref(gfDatabase, 'uploads/docs/'), {
      filename,
    })
      .then(() => {
        return {
          message: 'Data written successfully!',
        };
      })
      .catch((error) => {
        return {
          error: error,
        };
      });
  }

  get(): string {
    return 'null';
  }

  delete(): void {}
}

export default StorageRepositoryFirebase;
