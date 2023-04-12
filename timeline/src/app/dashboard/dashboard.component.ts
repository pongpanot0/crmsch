import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  matVersion: string = '5.1.0';
  breakpoint: number;
  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 768 ? 1 : 1;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 768 ? 1 : 1;
  }
}
