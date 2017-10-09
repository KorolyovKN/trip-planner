import { Component, ElementRef, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Plan } from '../models/plan';
import { TestService } from '../test.service';



@Component({
  selector: `[app-add-plan-modal]`,
  templateUrl: './add-plan-modal.component.html',
  styleUrls: ['./add-plan-modal.component.scss']
})
export class AddPlanModalComponent implements OnInit {

  @Output() onChanged = new EventEmitter<object>();

  plan: Plan = new Plan();
  files: any;
  planName: string;
  errorMessage: string;

  closeResult: string;

  constructor(private modalService: NgbModal,
              private testService: TestService,
              private el: ElementRef) {}

  dateChanged(date) {
    this.plan.date = date;
  }

  upload(event) {
    let inputEl = event.target || event.srcElement;;
    console.log('iam+ ' + inputEl);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      for (let i = 0; i < fileCount; i++) {
        formData.append('photo', inputEl.files.item(i));
      }
      this.testService.uploadImg(formData).subscribe(
        (success) => {
          this.plan.planImage = success._body;
        },
        (error) => alert(error)
      );
    }
  }

  addPlan(c): void {
    this.testService.postPlan(this.plan)
      .subscribe(plan => {
        this.reset();
        this.planName = plan.title;
      }, error => this.errorMessage = <any>error);
    c();
    this.onChanged.emit(event);
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

  private reset() {
    this.plan.title = null;
    this.plan.date = null;
    this.plan.period = null;
    this.plan.planImage = null;
  }

  ngOnInit() {
    this.plan.planImage = '/assets/images/California.jpg';
  }

}
