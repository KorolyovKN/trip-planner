import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Checklist } from '../models/checklist';

@Component({
  selector: `[app-add-checklist-modal]`,
  templateUrl: './add-checklist-modal.component.html',
  styleUrls: ['./add-checklist-modal.component.scss']
})
export class AddChecklistModalComponent implements OnInit {

  closeResult: string;

  checklist = new Checklist();



  constructor(private modalService: NgbModal) { }

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
