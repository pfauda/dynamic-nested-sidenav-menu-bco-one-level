import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'DevFestFL',
      children: [
        {
          displayName: 'What up web',
          route: 'what-up-web'
        },
        {
          displayName: 'Material design',
          route: 'material-design'
        },
        {
          displayName: 'Michael prentice',
          route: 'michael-prentice'
        }
      ]
    },
    {
      displayName: 'Disney',
      children: [
        {
          displayName: 'What up web',
          route: 'what-up-web'
        },
        {
          displayName: 'Material design',
          route: 'material-design'
        },
        {
          displayName: 'Michael prentice',
          route: 'michael-prentice'
        }
      ]
    },
    {
      displayName: 'Orlando',
      children: [
        {
          displayName: 'What up web',
          route: 'what-up-web'
        },
        {
          displayName: 'Material design',
          route: 'material-design'
        },
        {
          displayName: 'Michael prentice',
          route: 'michael-prentice'
        }
      ]
    }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
