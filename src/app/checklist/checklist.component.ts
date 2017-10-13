import { Component, OnInit } from '@angular/core';
import { Checklist } from '../models/checklist';

@Component({
  selector: `[app-checklist]`,
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  checklist = new Checklist();
  shortList: Object[];

  constructor() { }

  ngOnInit() {
    this.checklist.title = 'My checklist';
    this.checklist.listCategory = 'clothes';
    this.checklist.items = [
      {
        itemContent: 'Tshorts',
        itemChecked: 'none'
      },
      {
        itemContent: 'Hats',
        itemChecked: 'prepared'
      },
      {
        itemContent: 'Pants',
        itemChecked: 'checked'
      }
      ,
      {
        itemContent: 'Shoose',
        itemChecked: 'in-bag'
      }
    ];

    this.shortList = this.checklist.items.slice(0, 2);
  }

  listOpen(event) {
    alert('list open');
  }

  listRemove(event) {
    alert('list remove');
  }

}
