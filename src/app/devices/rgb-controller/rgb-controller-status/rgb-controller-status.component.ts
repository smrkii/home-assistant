import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RgbwControllerStatus } from '../../../../core/api/devices/rgb-controller/rgb-controller.model';
import { ShellyApiService } from '../../../shared/shelly-api.service';

@Component({
  selector: 'app-rgb-controller-status',
  templateUrl: './rgb-controller-status.component.html',
  styleUrls: ['./rgb-controller-status.component.scss']
})
export class RgbControllerStatusComponent implements OnInit {
  @Input() deviceId: string;
  rgbwControllerStatus: RgbwControllerStatus;
  status: boolean = true;
  public isCollapsed = false;
  @ViewChild('f') form: NgForm;


  constructor(private shellyApi: ShellyApiService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) { }




  ngOnInit(): void {
    this.shellyApi.rgbwControllerStatus(this.deviceId).subscribe(
      (response) => {
        this.rgbwControllerStatus = response;
        this.status = this.rgbwControllerStatus.isok;

        this.form.form.patchValue({
          networkGroup:{
            ssid: this.rgbwControllerStatus.data.device_status.wifi_sta.ssid,
            ip: this.rgbwControllerStatus.data.device_status.wifi_sta.ip,
            connected: this.rgbwControllerStatus.data.device_status.wifi_sta.connected,
            mac: this.rgbwControllerStatus.data.device_status.mac,
          },
          softwareGroup: {
            softwareStatus: this.rgbwControllerStatus.data.device_status.update.status,
            hasUpdate: this.rgbwControllerStatus.data.device_status.update.has_update,
            newVersion: this.rgbwControllerStatus.data.device_status.update.new_version,
            oldVersion: this.rgbwControllerStatus.data.device_status.update.old_version
          }
        })

      },(error)=>{
        this.toastr.error(error.message, 'Error occured!');
      }
    )



  }

  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
