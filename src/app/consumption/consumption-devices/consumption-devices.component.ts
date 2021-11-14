import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevicesService } from '../../devices/devices.service';

@Component({
  selector: 'app-consumption-devices',
  templateUrl: './consumption-devices.component.html',
  styleUrls: ['./consumption-devices.component.scss']
})
export class ConsumptionDevicesComponent implements OnInit {
  interval: string = 'year'
  devices = {};
  subscription: Subscription;

  constructor(private devicesService: DevicesService) {

    if (localStorage.getItem("devices"))
      this.devices = JSON.parse(localStorage.getItem("devices"));
  }

  ngOnInit(): void {
    this.subscription = this.devicesService.devices.subscribe((value) => {
      this.devices = value;
    });
  }

  setInterval(interval: string){
    this.interval = interval;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
