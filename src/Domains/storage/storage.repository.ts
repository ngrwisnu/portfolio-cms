abstract class StorageRepository<T> {
  abstract add(filename: T): Promise<{ [key: string]: string }>;
  abstract get(): Promise<{ message: T }>;
  abstract delete(filename: T): void;
}

export default StorageRepository;
