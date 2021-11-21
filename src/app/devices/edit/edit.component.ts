import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAlertComponent } from '../../shared/delete-alert/delete-alert.component';
import { DevicesService } from '../devices.service';
import { SwitchEditComponent } from '../switch/switch-edit/switch-edit.component';
import { AddNewModalComponent } from './add-new-modal/add-new-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { NgForm } from '@angular/forms';
import { SwitchStatusComponent } from '../switch/switch-status/switch-status.component';
import { RgbControllerEditComponent } from '../rgb-controller/rgb-controller-edit/rgb-controller-edit.component';
import { Shht1EditComponent } from '../shht1/shht1-edit/shht1-edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  devices = {};
  inEdit: boolean = false;


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

  openDeleteAlertModal(){
    const modal = this.modalService.open(DeleteAlertComponent);
    modal.componentInstance.deviceId = 'TEST'

    modal.result.then((data) => {
      console.log(data);

    }, (reason) => {
      console.log(reason);
      // on dismiss
    });

  }

  openEditModal(){
    const modal = this.modalService.open(EditModalComponent);
    modal.componentInstance.deviceId = 'TEST'

    modal.result.then((data) => {
      console.log(data);

    }, (reason) => {
      console.log(reason);
      // on dismiss
    });

  }

  openSwitchEditModal(deviceId: string){
    const modal = this.modalService.open(SwitchEditComponent);
    modal.componentInstance.deviceId = deviceId

    modal.result.then((data) => {
      console.log(data);

    }, (reason) => {
      console.log(reason);
      // on dismiss
    });
  }

  openRgbControllerEditModal(deviceId: string){
    const modal = this.modalService.open(RgbControllerEditComponent);
    modal.componentInstance.deviceId = deviceId

    modal.result.then((data) => {
      console.log(data);

    }, (reason) => {
      console.log(reason);
      // on dismiss
    });

  }

  openShht1EditModal(deviceId: string){
    const modal = this.modalService.open(Shht1EditComponent);
    modal.componentInstance.deviceId = deviceId

    modal.result.then((data) => {
      console.log(data);

    }, (reason) => {
      console.log(reason);
      // on dismiss
    });

  }



  startEdit(){
    this.inEdit = true;
  }

  stopEdit(){
    this.inEdit = false;
  }


}
