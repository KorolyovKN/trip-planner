import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AddPlanService {

  private planAddedSource = new Subject<string>();

  planAdded$ = this.planAddedSource.asObservable();


  planAdded(message: string) {
    this.planAddedSource.next(message);
  }

}
