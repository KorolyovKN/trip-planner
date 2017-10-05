import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  plans: any = [];

  constructor( private testService: TestService) { }

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
