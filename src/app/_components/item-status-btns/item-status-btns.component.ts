import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { ItemChecked } from '../../models/item-checked';

@Component({
  selector: 'app-item-status-btns',
  templateUrl: './item-status-btns.component.html',
  styleUrls: ['./item-status-btns.component.scss']
})
export class ItemStatusBtnsComponent implements OnInit {

  @Input() itemStatus: ItemChecked;

  @Output() onChanged = new EventEmitter<ItemChecked>();
  statusOnChanged(status) {
    this.onChanged.emit(status);
  }

  constructor() { }

  ngOnInit() {
  }

}
