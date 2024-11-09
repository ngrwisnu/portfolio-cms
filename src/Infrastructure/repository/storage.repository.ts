import { gfDatabase } from 'src/config/firebase';
import { child, get, ref, set } from 'firebase/database';
import StorageRepository from 'src/Domains/storage/storage.repository';
import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { unlink } from 'fs/promises';

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

  async get(): Promise<{ message: string }> {
    try {
      const dbRef = ref(gfDatabase);
      const response = await get(child(dbRef, 'uploads/docs'));

      if (response.exists()) {
        return response.val();
      } else {
        return {
          message: `No Data Available!`,
        };
      }
    } catch (error) {
      new Error(error);
    }
  }

  async delete(filename: string): Promise<void> {
    const filePath = path.join(process.cwd(), 'public', 'docs', filename);

    try {
      await unlink(filePath);

      console.log('File successfully deleted');
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default StorageRepositoryFirebase;
