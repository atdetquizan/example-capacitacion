import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storage: Storage = sessionStorage;

    constructor() {}

    set<T>(name: string, value: T): T {
        this.storage.setItem(name, JSON.stringify(value));
        return value;
    }

    get<T>(name: string): T {
        const value = this.storage.getItem(name);
        if (value) {
            return JSON.parse(value) as T;
        }
        return null;
    }

    removeByName(name: string): void {
      this.storage.removeItem(name);
    }

    removeAll(): void {
      this.storage.clear();
    }
}
