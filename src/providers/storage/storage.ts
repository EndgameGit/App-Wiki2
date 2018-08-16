import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  /**
   * Constructor
   * @param  {Storage} storage Ionic Storage
   */
  constructor(private storage: Storage) {
  }

  getValue<T>(key: string): Promise<T> {
    return this.storage.get(key);
  }

  setValue<T>(key: string, value: T): Promise<void> {
    return this.storage.set(key, value);
  }

  removeValue(key: string): Promise<void> {
    return this.storage.remove(key);
  }

  clear(): Promise<void> {
    return this.storage.clear();
  }

}
