import { Component } from '@angular/core';
import { AddPlanService } from './services/add-plan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AddPlanService]
})
export class AppComponent {
  planMessage = 'plan added!';
  title = 'app works!';
  constructor(private addPlanService: AddPlanService) {}

  planAdded() {
    this.addPlanService.planAdded(this.planMessage);
  }
}
