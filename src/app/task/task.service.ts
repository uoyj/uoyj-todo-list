import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoTask } from '../common/TodoTask.interface';
import { StorageAPIService } from '../common/storage-api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSettings = {
    key: "task"
  }

  private tasks: BehaviorSubject<TodoTask[]>;
  
  constructor(private storage: StorageAPIService) {
    let storageLists = this.storage.get(this.taskSettings.key) || "[]";
    this.tasks = new BehaviorSubject(JSON.parse(storageLists));
  }

  create(name: string, listId:number): void{
    let date = new Date().toISOString();
    let task:TodoTask = {
      completed: false,
      createDate: date,
      id: this.tasks.value.length + 1,
      listId: listId,
      name: name,
      updateDate: date,
    };

    let currentTasks = this.tasks.value;
    currentTasks.push(task);

    this.storage.set(this.taskSettings.key, JSON.stringify(currentTasks));
    this.tasks.next(currentTasks);
  }

  getAll(): Observable<TodoTask[]>{
    return this.tasks.asObservable();
  }
}
