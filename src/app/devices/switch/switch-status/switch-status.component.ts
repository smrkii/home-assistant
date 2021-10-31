import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal,NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SwitchStatus } from '../../../../core/api/devices/shelly1/shelly1.model';
import { ShellyApiService } from '../../../shared/shelly-api.service';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switch-status',
  templateUrl: './switch-status.component.html',
  styleUrls: ['./switch-status.component.scss']
})
export class SwitchStatusComponent implements OnInit {
  @Input() deviceId: string;
  switchStatus: SwitchStatus;
  status: boolean = true;
  public isCollapsed = false;
  @ViewChild('f') form: NgForm;

  constructor(private shellyApi: ShellyApiService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) { }




  ngOnInit(): void {
    this.shellyApi.relayStatus(this.deviceId).subscribe(
      (response) => {
        this.switchStatus = response;
        this.status = this.switchStatus.isok;

        this.form.form.patchValue({
          networkGroup:{
            ssid: this.switchStatus.data.device_status.wifi_sta.ssid,
            ip: this.switchStatus.data.device_status.wifi_sta.ip,
            connected: this.switchStatus.data.device_status.wifi_sta.connected,
            mac: this.switchStatus.data.device_status.mac,
          },
          temperatureGroup:{
            tempStatus: this.switchStatus.data.device_status.temperature_status,
            temp: this.switchStatus.data.device_status.temperature,
            overTemp: this.switchStatus.data.device_status.overtemperature
          },
          softwareGroup: {
            softwareStatus: this.switchStatus.data.device_status.update.status,
            hasUpdate: this.switchStatus.data.device_status.update.has_update,
            newVersion: this.switchStatus.data.device_status.update.new_version,
            oldVersion: this.switchStatus.data.device_status.update.old_version
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
