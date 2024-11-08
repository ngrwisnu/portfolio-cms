abstract class StorageRepository<T> {
  abstract add(filename: T): Promise<{ [key: string]: string }>;
  abstract get(): T;
  abstract delete(): void;
}

export default StorageRepository;
