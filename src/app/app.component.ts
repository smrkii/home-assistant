import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ShellyApiService } from './shared/shelly-api.service';

declare var annyang: any;
declare var SpeechKITT: any;

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private authService: AuthService,
    private shellyApiService: ShellyApiService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.authService.autoLogin();
    this.shellyApiService.autoLogin();

    const commands = {
      'hi': () => { alert('hi'); },
      'turn my room switch on': () => { this.onSwitchClick(); },
      'turn my room switch off': () => { this.offSwitchClick(); }
    };
    annyang.addCommands(commands);
    annyang.start();

  }

  onSwitchClick(){
     this.shellyApiService.relayControll(0,'on','e8db84d28717').subscribe(
      (response) => {

        //this.toastr.success('Hello world!', 'Toastr fun!');
      },
      (error) => {
        console.log(error);


      }
    );
  }

  offSwitchClick(){
    this.shellyApiService.relayControll(0,'off','e8db84d28717').subscribe(
     (response) => {

       //this.toastr.success('Hello world!', 'Toastr fun!');
     },
     (error) => {
       console.log(error);


     }
   );
 }
}
