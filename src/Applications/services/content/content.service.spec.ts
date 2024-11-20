import StorageRepository from 'src/Domains/storage/storage.repository';
import { ContentService } from './content.service';

describe('ContentService', () => {
  class MockStorageRepository extends StorageRepository<string> {
    add = jest.fn();
    get = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ message: 'response message' }),
      );
    delete = jest.fn();
  }

  let storageRepository: MockStorageRepository;
  let contentService: ContentService;

  beforeEach(() => {
    storageRepository = new MockStorageRepository();
    contentService = new ContentService(storageRepository);
  });

  it('should invoke method get from storage repository', async () => {
    const res = await contentService.get();

    expect(storageRepository.get).toHaveBeenCalledTimes(1);
    expect(res).toStrictEqual({ message: 'response message' });
  });
});
