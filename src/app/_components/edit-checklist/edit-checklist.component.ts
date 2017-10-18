import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Checklist } from '../../models/checklist';
import { ChecklistService } from '../../services/checklist.service';

@Component({
  selector: `[app-edit-checklist]`,
  templateUrl: './edit-checklist.component.html',
  styleUrls: ['./edit-checklist.component.scss']
})
export class EditChecklistComponent implements OnInit {

  @Output() onChanged = new EventEmitter<object>();

  closeResult: string;

  errorMessage: string;


   @Input() checklist: Checklist;



  constructor(private modalService: NgbModal,
              private checklistService: ChecklistService) {}

  ngOnInit() {

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
    console.log(this.checklist);
    this.checklistService.updateChecklist(this.checklist)
      .subscribe(checklist => {
        this.onChanged.emit(event);
      }, error => this.errorMessage = <any>error);
    c();
  }

  byChecked(a, b) {
    enum Checked {'none', 'prepared', 'checked', 'in-bag'};
    const ae = a.itemChecked;
    const be = b.itemChecked;
    return Checked[ae] > Checked[be] ? 1 : -1;
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
