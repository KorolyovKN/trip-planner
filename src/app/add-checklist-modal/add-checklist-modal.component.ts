import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Checklist } from '../models/checklist';

import { ChecklistService } from '../services/checklist.service';

@Component({
  selector: `[app-add-checklist-modal]`,
  templateUrl: './add-checklist-modal.component.html',
  styleUrls: ['./add-checklist-modal.component.scss']
})
export class AddChecklistModalComponent implements OnInit {

  @Output() onChanged = new EventEmitter<object>();

  closeResult: string;

  errorMessage: string;

  checklist = new Checklist();

  checklistGroups = [
    'clothes',
    'gadjets',
    'documents'
  ];

  @Input() planId: string;



  constructor(private modalService: NgbModal,
              private checklistService: ChecklistService) {}

  ngOnInit() {

    /*this.checklist.title = 'My checklist';
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
    ];*/
    this.checklist.planId = this.planId;

    this.checklist.items = [];

  }

  itemOnChanges(event, index) {
    this.checklist.items[index].itemContent = event[1];
    this.checklist.items[index].itemChecked = event[0];
  }

  onAddItem(event) {
    const item = {itemContent: event[0], itemChecked: event[1]};
    this.checklist.items.push(item);
    console.log(event);
  }

  saveChecklist(c): void {
    this.checklistService.postChecklist(this.checklist)
      .subscribe(checklist => {
        this.reset();
        this.onChanged.emit(event);
      }, error => this.errorMessage = <any>error);
    c();
  }

  private reset() {
    this.checklist.title = null;
    this.checklist.listCategory = null;
    this.checklist.items = [];
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
