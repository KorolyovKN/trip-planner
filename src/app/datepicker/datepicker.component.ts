import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})


export class DatepickerComponent {


  @Output() onChanged = new EventEmitter<object>();

  dateEmit (event) {
    this.onChanged.emit(event);
  }

  constructor() { };
}
