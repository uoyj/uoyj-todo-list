import { Component, Input, OnInit } from '@angular/core';
import { TodoTask } from '../common/TodoTask.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() task!: TodoTask;

  constructor() { }

  ngOnInit(): void {
  }

}
