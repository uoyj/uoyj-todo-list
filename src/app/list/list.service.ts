import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from '../common/List.interface';
import { StorageAPIService } from '../common/storage-api.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private listSettings = {
    key: "lists"
  }

  private lists: BehaviorSubject<List[]>;

  constructor(private storage: StorageAPIService) {
    let storageLists = this.storage.get(this.listSettings.key) || "[]";
    this.lists = new BehaviorSubject(JSON.parse(storageLists));
  }

  create(name: string): void{
    let date = new Date().toISOString();
    let list:List = {
      archived: false,
      createDate: date,
      id: this.lists.value.length + 1,
      name: name,
      updateDate: date
    };

    let currentLists = this.lists.value;
    currentLists.push(list);

    this.storage.set(this.listSettings.key, JSON.stringify(currentLists));
    this.lists.next(currentLists);
  }
  
  getAll(): Observable<List[]>{
    return this.lists.asObservable();
  }

}
