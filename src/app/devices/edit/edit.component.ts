import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAlertComponent } from '../../shared/delete-alert/delete-alert.component';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  devices = {};

  constructor(private devicesService: DevicesService,
    private modalService: NgbModal,
    private config: NgbModalConfig) {

      this.config.backdrop = 'static';
      this.config.keyboard = false;

    if (localStorage.getItem("devices"))
      this.devices = JSON.parse(localStorage.getItem("devices"));
  }

  ngOnInit(): void {
  }

  openStatusModal(){
    const modal = this.modalService.open(DeleteAlertComponent);
    modal.componentInstance.deviceId = 'TEST'

    modal.result.then((data) => {
      console.log(data);

    }, (reason) => {
      console.log(reason);
      // on dismiss
    });

  }

}
