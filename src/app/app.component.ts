import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './common/List.interface';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'uoyj-todo-list';
  lists: Observable<List[]>;
  
  constructor(private listSrvc:ListService) {
    this.lists = this.listSrvc.getAll();
  }

  ngOnInit(): void {
    
  }

  createList(name: string){
    this.listSrvc.create(name);
  }

}
