import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ItemChecked } from '../../models/item-checked';

interface NewItemLayout {
  itemContent: string;
  itemChecked: ItemChecked;
}

@Component({
  selector: 'app-add-checklist-item',
  templateUrl: './add-checklist-item.component.html',
  styleUrls: ['./add-checklist-item.component.scss']
})

export class AddChecklistItemComponent implements OnInit {


  newItem: NewItemLayout = {
    itemContent: null,
    itemChecked: 'none'
  };

  @Output() onChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  addItem() {
    if (this.newItem.itemContent !== null) {
      const event = [this.newItem.itemContent, this.newItem.itemChecked];
      this.onChanged.emit(event);
      this.newItem.itemContent = null;
    }
  }

}
