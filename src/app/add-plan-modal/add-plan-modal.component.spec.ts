import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanModalComponent } from './add-plan-modal.component';

describe('AddPlanModalComponent', () => {
  let component: AddPlanModalComponent;
  let fixture: ComponentFixture<AddPlanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
