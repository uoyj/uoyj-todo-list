import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageAPIService {

  constructor() { }

  get(key: string): string | null {
    key = key || '';
    return window.localStorage.getItem(key);
  }

  set(key: string, value:any): void {
    key = key || '';
    value = value || '';

    if (key) {
      window.localStorage.setItem(key, value);
    }
  }

  delete(key: string): void {
    key = key || '';

    if (key) {
      window.localStorage.removeItem(key);
    }
  }

}
