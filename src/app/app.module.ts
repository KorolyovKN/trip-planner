import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TestService } from './test.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { AddPlanModalComponent } from './add-plan-modal/add-plan-modal.component';

const ROUTES = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'plan',
    component: PlanDashboardComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanDashboardComponent,
    AddPlanModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
