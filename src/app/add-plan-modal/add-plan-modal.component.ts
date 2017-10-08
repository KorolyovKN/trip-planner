import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
              private testService: TestService) {}

  dateChanged(date) {
    this.plan.date = date;
  }

  addPhoto(event) {
    let target = event.target || event.srcElement;
    this.files = target.files;
  }

  addPlan(c): void {
    let final_data;
    if(this.files) {
      let formData = new FormData();
      formData.append('photo', this.files[0]);

      formData.append('data', JSON.stringify(this.plan));
      final_data = formData;
      var outputLog = {}, iterator = final_data.entries(), end = false;
      while(end == false) {
        var item = iterator.next();
        if(item.value!=undefined) {
          outputLog[item.value[0]] = item.value[1];
        } else if(item.done==true) {
          end = true;
        }
      }
      console.log(outputLog);
    } else {
      final_data = this.plan;
    }
    this.testService.postPlan(final_data)
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
