import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ShellyApiService } from './shared/shelly-api.service';
import { DevicesService } from './devices/devices.service';

declare var annyang: any;
declare var SpeechKITT: any;

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  devices = {};

  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private authService: AuthService,
    private shellyApiService: ShellyApiService,
    private devicesService: DevicesService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };

    if (localStorage.getItem("devices"))
      this.devices = JSON.parse(localStorage.getItem("devices"));
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
      'turn :room light :action': (room,action) => { this.switch(room,action); },
      'set :device color to :color': (device,color) => { this.rgbw(device,color); }
    };
    annyang.addCommands(commands);
    annyang.start();


  }


  switch(room: string, action: string){

      for (let k in this.devices) {
        if(this.devices[k].props.name == room){
          this.shellyApiService.relayControll(0,action,this.devices[k].props.id).subscribe(
            (response) => {
            },
            (error) => {
            }
          );
        }



        console.log(k + ' is ' + this.devices[k].props.name)
      }






    console.log(room);
    console.log(action);
  }

  rgbw(device: string, color: string){
    console.log(device);
    console.log(color);
  }


  onSwitchClick(){
     this.shellyApiService.relayControll(0,'on','e8db84d28717').subscribe(
      (response) => {
      },
      (error) => {
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
