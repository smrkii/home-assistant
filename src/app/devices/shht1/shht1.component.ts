import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../../core/api/devices/device.model';
import { SwitchStatus } from '../../../core/api/devices/shelly1/shelly1.model';

@Component({
  selector: 'app-shht1',
  templateUrl: './shht1.component.html',
  styleUrls: ['./shht1.component.scss']
})
export class Shht1Component implements OnInit {
  @Input('deviceProps') deviceProps: Device
  @Input('deviceStatus') deviceStatus: SwitchStatus
  constructor() { }

  ngOnInit(): void {
  }

}
