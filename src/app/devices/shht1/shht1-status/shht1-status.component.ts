import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Shht1Status } from '../../../../core/api/devices/shht1/shht1.model';
import { ShellyApiService } from '../../../shared/shelly-api.service';

@Component({
  selector: 'app-shht1-status',
  templateUrl: './shht1-status.component.html',
  styleUrls: ['./shht1-status.component.scss']
})
export class Shht1StatusComponent implements OnInit {
  @Input() deviceId: string;
  shht1Status: Shht1Status;
  status: boolean = true;
  public isCollapsed = false;
  @ViewChild('f') form: NgForm;

  constructor(private shellyApi: ShellyApiService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) { }




  ngOnInit(): void {
    this.shellyApi.shht1Status(this.deviceId).subscribe(
      (response) => {
        this.shht1Status = response;
        this.status = this.shht1Status.isok;

        this.form.form.patchValue({
          networkGroup:{
            ssid: this.shht1Status.data.device_status.wifi_sta.ssid,
            ip: this.shht1Status.data.device_status.wifi_sta.ip,
            connected: this.shht1Status.data.device_status.wifi_sta.connected,
            mac: this.shht1Status.data.device_status.mac,
          },
          /*
          temperatureGroup:{
            tempStatus: this.shht1Status.data.device_status.temperature_status,
            temp: this.shht1Status.data.device_status.temperature,
            overTemp: this.shht1Status.data.device_status.overtemperature
          },*/
          softwareGroup: {
            softwareStatus: this.shht1Status.data.device_status.update.status,
            hasUpdate: this.shht1Status.data.device_status.update.has_update,
            newVersion: this.shht1Status.data.device_status.update.new_version,
            oldVersion: this.shht1Status.data.device_status.update.old_version
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
