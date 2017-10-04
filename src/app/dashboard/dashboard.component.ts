import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bears: any = [];

  constructor( private testService: TestService) { }

  ngOnInit() {
    this.testService.getAllPosts().subscribe(bears => {
      this.bears = bears;
    });
  }

}
