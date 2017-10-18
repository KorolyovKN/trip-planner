import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Checklist } from '../models/checklist';

@Injectable()
export class ChecklistService {

  constructor(private http: Http) { }

  getChecklists(planId) {
    return this.http.get('http://localhost:3000/api/checklist/' + planId)
      .map( res => res.json());
  }

  postChecklist(checklist: Checklist): Observable<Checklist> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://localhost:3000/api/checklists', checklist, options)
      .map(this.extractData).catch(this.handleErrorObservable);
  }

  updateChecklist(checklist: Checklist): Observable<Checklist> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    const url = `http://localhost:3000/api/checklistUpdate/${checklist._id}`;

    return this.http.put(url, checklist, options)
      .map(this.extractData).catch(this.handleErrorObservable);
  }

  deleteChecklist(checklist: Checklist) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    const url = `http://localhost:3000/api/checklistDelete/${checklist._id}`;

    return this.http.delete(url, options)
      .subscribe((ok) => {console.log(ok)});
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
