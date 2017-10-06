import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export class Plan {
  constructor( public title: string,
               public date: {},
               public period: string,
               public imgUrl: string) {}
}

@Component({
  selector: `[app-add-plan-modal]`,
  templateUrl: './add-plan-modal.component.html',
  styleUrls: ['./add-plan-modal.component.scss']
})
export class AddPlanModalComponent implements OnInit {

  plan: Plan;
  title: string;
  period: string;
  date: {};
  imgUrl: string;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  onChanged(date) {
    this.date = date;
    console.log(date);
  }

  addPlan(title: string, date: {}, period: string, imgUrl: string) {
    this.plan = new Plan(title, date, period, imgUrl);
    console.log(this.plan);
    this.title = null;
    this.date = {};
    this.period = null;
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

  ngOnInit() {
    this.imgUrl = '/assets/images/California.jpg';
  }

}
