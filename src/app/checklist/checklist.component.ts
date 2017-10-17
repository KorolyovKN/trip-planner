import { Component, OnInit, Input } from '@angular/core';
import { Checklist } from '../models/checklist';

@Component({
  selector: `[app-checklist]`,
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  shortList: Object[];

  @Input() checklist: Checklist;

  constructor() { }

  ngOnInit() {
    this.shortList = this.checklist.items.slice(0, 4);
  }

  listOpen(event) {
    alert('list open');
  }

  listRemove(event) {
    alert('list remove');
  }

}
