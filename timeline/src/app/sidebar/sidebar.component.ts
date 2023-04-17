import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidebar!: MatSidenav;

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(['(max-width:800px']).subscribe((res) => {
      if (res.matches) {
        this.sidebar.mode = 'over';
        this.sidebar.close();
      } else {
        this.sidebar.mode = 'side';
        this.sidebar.open()
      }
    });
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
