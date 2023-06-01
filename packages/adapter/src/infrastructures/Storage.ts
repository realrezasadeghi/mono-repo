export interface IStorage {
  remove(name: string): void;
  get(name: string): Promise<string>;
  set(name: string, value: string): void;
}

export class Storage implements IStorage {
  constructor(private readonly storage: any) {}

  async get(name: string): Promise<string> {
    return await this.storage.getItem(name);
  }

  async set(name: string, value: string): Promise<void> {
    await this.storage.setItem(name, value);
  }

  async remove(name: string): Promise<void> {
    await this.storage.removeItem(name);
  }
}
