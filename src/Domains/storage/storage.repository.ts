abstract class StorageRepository {
  abstract get(): string;
  abstract delete(): void;
}

export default StorageRepository;
