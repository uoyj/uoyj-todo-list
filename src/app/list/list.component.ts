import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../common/List.interface';
import { TodoTask } from '../common/TodoTask.interface';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() list: List | any;
  tasks: Observable<TodoTask[]>;

  constructor(private taskSrvc: TaskService) {
    this.tasks = this.taskSrvc.getAll();
  }

  ngOnInit(): void {

  }
  
  createTask(name: string){
    this.taskSrvc.create(name, this.list.id);
  }

}