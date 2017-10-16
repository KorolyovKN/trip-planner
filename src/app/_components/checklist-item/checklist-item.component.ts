import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ItemChecked } from '../../models/item-checked';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent {

  @Input() itemContent: string;
  @Input() itemStatus: ItemChecked;

  @Output() onChanged = new EventEmitter();

  itemEditing = false;

  constructor() {}
  statusOnChanged(status) {
    this.itemStatus = status;
    console.log(status);
    this.itemOnChanges(status, this.itemContent);
  }

  itemEdit(needSave) {
    this.itemEditing ? this.itemEditing = false : this.itemEditing = true;
    if (needSave) {
      this.itemOnChanges(this.itemStatus, this.itemContent);
    }
  }

  itemOnChanges(status, content) {
    const item = [status, content];
    console.log(item);
    this.onChanged.emit(item);
  }


}
