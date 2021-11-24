import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DevicesService } from '../../../devices/devices.service';
import { DeleteAlertComponent } from '../../../shared/delete-alert/delete-alert.component';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {
  groups = {};
  inEdit: boolean = false;


  constructor(private devicesService: DevicesService,
    private modalService: NgbModal,
    private config: NgbModalConfig) {

      this.config.backdrop = 'static';
      this.config.keyboard = false;

    if (localStorage.getItem("groups"))
      this.groups = JSON.parse(localStorage.getItem("groups"));
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


  }

  openSwitchEditModal(deviceId: string){

  }

  openRgbControllerEditModal(deviceId: string){


  }

  openShht1EditModal(deviceId: string){


  }



  startEdit(){
    this.inEdit = true;
  }

  stopEdit(){
    this.inEdit = false;
  }

}
