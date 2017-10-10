import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-plan-dashboard',
  templateUrl: './plan-dashboard.component.html',
  styleUrls: ['./plan-dashboard.component.scss']
})
export class PlanDashboardComponent implements OnInit {

  id: number;
  plan: any;
  loading = true;

  constructor(private activateRoute: ActivatedRoute,
              private testService: TestService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.testService.getCurrentPlan(this.id).subscribe(plan => {
      this.plan = plan;
      this.loading = false;
      console.log(this.plan);
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

}
