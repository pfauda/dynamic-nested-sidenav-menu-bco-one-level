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
          displayName: 'Speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          route: 'material-design'
        }
      ]
    },
    {
      displayName: 'Disney',
      children: [
        {
          displayName: 'Speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Orlando',
      children: [
        {
          displayName: 'Speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Maleficent',
      disabled: true,
      children: [
        {
          displayName: 'Speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          route: 'feedback'
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
