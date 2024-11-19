import StorageRepository from '../../../Domains/storage/storage.repository';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  class MockStorageRepository extends StorageRepository<string> {
    add = jest.fn().mockImplementation(() => Promise.resolve({ status: 'ok' }));
    get = jest.fn().mockImplementation(() => Promise.resolve({ status: 'ok' }));
    delete = jest.fn();
  }

  let storageRepository: MockStorageRepository;
  let dashboardService: DashboardService;

  beforeEach(() => {
    storageRepository = new MockStorageRepository();
    dashboardService = new DashboardService(storageRepository);
  });

  describe('add method', () => {
    it('should return the correct output', async () => {
      const result = await dashboardService.add('');

      expect(storageRepository.add).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual({ status: 'ok' });
    });
  });

  describe('get method', () => {
    it('should return the correct output', async () => {
      const result = await dashboardService.get();

      expect(storageRepository.get).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual({ status: 'ok' });
    });
  });

  describe('remove method', () => {
    it('should call the delete method from storage repository', async () => {
      await dashboardService.remove('');

      expect(storageRepository.delete).toHaveBeenCalledTimes(1);
    });
  });
});
