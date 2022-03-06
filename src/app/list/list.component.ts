import { Component, Input, OnInit } from '@angular/core';
import { List } from '../common/List.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() list: List | any;

  constructor() { }

  ngOnInit(): void {

  }

}
