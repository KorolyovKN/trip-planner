import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TestService } from '../test.service';
import { ChecklistService } from '../services/checklist.service';


@Component({
  selector: 'app-plan-dashboard',
  templateUrl: './plan-dashboard.component.html',
  styleUrls: ['./plan-dashboard.component.scss']
})
export class PlanDashboardComponent implements OnInit {

  id: number;
  plan: any;
  loading = true;
  checklists: any;

  constructor(private activateRoute: ActivatedRoute,
              private testService: TestService,
              private checklistService: ChecklistService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.testService.getCurrentPlan(this.id).subscribe(plan => {
      this.plan = plan;
      this.loading = false;
      console.log(this.plan);
    });

    this.checklistService.getChecklists(this.id).subscribe(checklists => {
      this.checklists = checklists;
      console.log(this.checklists);
    });
  }

  checklistAdded() {
    this.checklistService.getChecklists(this.id).subscribe(checklists => {
      this.checklists = checklists;
      console.log(this.checklists);
    });
  }

  getPeriod(period) {
    switch (period) {
      case 'active':
        return 'label-success';
      case 'past':
        return 'label-default';
      case 'in plans':
        return 'label-info';
      case 'in future':
        return 'label-primary';
    }
  }

  getPlanId() {
    return this.id;
}

}
