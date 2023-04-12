import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private titleService: Title,
    public mediaObserver: MediaObserver
  ) {}
  mediaSub: Subscription;
  deviceXs: Boolean;
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
  Onflex() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }
  ngOnInit() {
    this.Onflex();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`CRM - ${title}`);
        }
      });
  }
}
