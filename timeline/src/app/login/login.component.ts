import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  matVersion: string = '5.1.0';
  breakpoint: number;
  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 768 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 768 ? 1 : 2;
  }
}
