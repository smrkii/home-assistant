import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from '../../../core/api/devices/device.model';
import { SwitchStatus } from '../../../core/api/devices/shelly1/shelly1.model';
import { Shht1Status } from '../../../core/api/devices/shht1/shht1.model';
import { Shht1StatusComponent } from './shht1-status/shht1-status.component';

@Component({
  selector: 'app-shht1',
  templateUrl: './shht1.component.html',
  styleUrls: ['./shht1.component.scss']
})
export class Shht1Component implements OnInit {
  @Input('deviceProps') deviceProps: Device
  @Input('deviceStatus') deviceStatus: any
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openStatusModal(){
    const modal = this.modalService.open(Shht1StatusComponent);
    modal.componentInstance.deviceId = this.deviceProps.id
  }

}
