import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Checklist } from '../models/checklist';

import { ChecklistService } from '../services/checklist.service';

@Component({
  selector: `[app-checklist]`,
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Output() onChanged = new EventEmitter<object>();

  shortList: Object[];

  @Input() checklist: Checklist;

  constructor(private checklistService: ChecklistService) { }

  ngOnInit() {
    this.shortList = this.checklist.items.slice(0, 4);
  }

  onEditList(event) {
    console.log('list edited');
    this.onChanged.emit(event);
  }

  listRemove() {
    this.checklistService.deleteChecklist(this.checklist);
    this.onChanged.emit(event);
  }

  byChecked(a, b) {
    enum Checked {'none', 'prepared', 'checked', 'in-bag'};
    const ae = a.itemChecked;
    const be = b.itemChecked;
    return Checked[ae] > Checked[be] ? 1 : -1;
  }


}
