import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../../core/api/devices/device.model';
import { SwitchStatus } from '../../../core/api/devices/shelly1/shelly1.model';

@Component({
  selector: 'app-rgb-controller',
  templateUrl: './rgb-controller.component.html',
  styleUrls: ['./rgb-controller.component.scss']
})
export class RgbControllerComponent implements OnInit {
  @Input('deviceProps') deviceProps: Device
  @Input('deviceStatus') deviceStatus: SwitchStatus
  constructor() { }

  ngOnInit(): void {
  }

}
