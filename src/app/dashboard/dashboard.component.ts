import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { AddPlanService } from '../services/add-plan.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  plans: any = [];
  subscription: Subscription;

  constructor( private testService: TestService,
               private addPlanService: AddPlanService) {
    this.subscription = addPlanService.planAdded$.subscribe(
      message => {
        this.testService.getAllPlans().subscribe(plans => {
          this.plans = plans;
        });
        console.log(message);
    });
  }

  ngOnInit() {
    this.testService.getAllPlans().subscribe(plans => {
      this.plans = plans;
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
