import StorageRepository from '../../../Domains/storage/storage.repository';
import { DashboardService } from './dashboard.service';

class MockStorageRepository extends StorageRepository<string> {
  add = jest.fn().mockImplementation(() => Promise.resolve({ status: 'ok' }));
  get = jest.fn();
  delete = jest.fn();
}

describe('DashboardService', () => {
  let storageRepository: MockStorageRepository;
  let dashboardService: DashboardService;

  beforeEach(() => {
    storageRepository = new MockStorageRepository();
    dashboardService = new DashboardService(storageRepository);
  });

  it('should call the add method from storage repository', async () => {
    await dashboardService.add('');

    expect(storageRepository.add).toHaveBeenCalledTimes(1);
  });

  it('should call the get method from storage repository', async () => {
    await dashboardService.get();

    expect(storageRepository.get).toHaveBeenCalledTimes(1);
  });

  it('should call the remove method from storage repository', async () => {
    await dashboardService.remove('');

    expect(storageRepository.delete).toHaveBeenCalledTimes(1);
  });
});
