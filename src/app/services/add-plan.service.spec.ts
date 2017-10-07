import { TestBed, inject } from '@angular/core/testing';

import { AddPlanService } from './add-plan.service';

describe('AddPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPlanService]
    });
  });

  it('should ...', inject([AddPlanService], (service: AddPlanService) => {
    expect(service).toBeTruthy();
  }));
});
