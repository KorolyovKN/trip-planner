import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TestService } from './test.service';
import { AddPlanService } from './services/add-plan.service';
import { ChecklistService } from './services/checklist.service';

import { DoneSortPipe } from './pipes/doneSortPipe';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { AddPlanModalComponent } from './add-plan-modal/add-plan-modal.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AddChecklistModalComponent } from './add-checklist-modal/add-checklist-modal.component';
import { ChecklistItemComponent } from './_components/checklist-item/checklist-item.component';
import { ItemStatusBtnsComponent } from './_components/item-status-btns/item-status-btns.component';
import { AddChecklistItemComponent } from './_components/add-checklist-item/add-checklist-item.component';
import { EditChecklistComponent } from './_components/edit-checklist/edit-checklist.component';


const ROUTES = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'plan/:id',
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
    AddPlanModalComponent,
    DatepickerComponent,
    ChecklistComponent,
    AddChecklistModalComponent,
    ChecklistItemComponent,
    ItemStatusBtnsComponent,
    AddChecklistItemComponent,
    DoneSortPipe,
    EditChecklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
  ],
  providers: [
    TestService,
    AddPlanService,
    ChecklistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
