import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Plan } from './models/plan';

@Injectable()
export class TestService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/bears')
      .map( res => res.json());
  }

  getAllPlans() {
    return this.http.get('/api/plans')
      .map( res => res.json());
  }

  postPlan(plan: Plan): Observable<Plan> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post('/api/plans', plan, options)
      .map(this.extractData).catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
