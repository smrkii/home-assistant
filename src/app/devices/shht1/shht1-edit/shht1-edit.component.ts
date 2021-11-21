import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal,NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SwitchStatus } from '../../../../core/api/devices/shelly1/shelly1.model';
import { ShellyApiService } from '../../../shared/shelly-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shht1-edit',
  templateUrl: './shht1-edit.component.html',
  styleUrls: ['./shht1-edit.component.scss']
})
export class Shht1EditComponent implements AfterViewInit {
  @Input() deviceId: string;
  switchStatus: SwitchStatus;
  status: boolean = true;
  public isCollapsed = false;
  @ViewChild('f') form: NgForm;

  constructor(private shellyApi: ShellyApiService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var devices = JSON.parse(localStorage.getItem('devices'));

    console.log(this.form);
    setTimeout(() => {
      this.form.form.patchValue({
        unit_group:{
          temperature_unit: devices[this.deviceId].temperatureUnit
        },
        temperature_treshold_group:{
          temperature_treshold: devices[this.deviceId].temperatureTreshold
        },
        humidity_treshold_group:{
          humidity_treshold: devices[this.deviceId].humidityTreshold
        },
        offset_group:{
          humidity_offset: devices[this.deviceId].humidityOffset,
          temperature_offset: devices[this.deviceId].temperatureOffset
        }
      })
    },0);
  }

  iconCollapse: string = 'icon-arrow-up';


  onTemperatureUnitChanged(value: Event){
    var devices = JSON.parse(localStorage.getItem('devices'));
    this.shellyApi.postSetTemperatureUnit((value.target as HTMLInputElement).value, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].temperatureUnit = (value.target as HTMLInputElement).value
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Temperature unit changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onTemperatureTresholdChanged(){
    var devices = JSON.parse(localStorage.getItem('devices'));

    this.shellyApi.postTemperatureTreshold(this.form.form.value.temperature_treshold_group.temperature_treshold, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].temperatureTreshold = this.form.form.value.temperature_treshold_group.temperature_treshold
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Temperature treshold changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }


  onHumidityTresholdChanged(){
    var devices = JSON.parse(localStorage.getItem('devices'));

    this.shellyApi.postHumidityTreshold(this.form.form.value.humidity_treshold_group.humidity_treshold, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].humidityTreshold = this.form.form.value.humidity_treshold_group.humidity_treshold
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Humidity treshold changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onOffsetChanged(){
    var devices = JSON.parse(localStorage.getItem('devices'));

    this.shellyApi.postOffset(
      this.form.form.value.offset_group.temperature_offset,
      this.form.form.value.offset_group.humidity_offset,
       this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].temperatureOffset =
        this.form.form.value.offset_group.temperature_offset
        devices[this.deviceId].humidityOffset =
        this.form.form.value.offset_group.humidity_offset

        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Offset changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }




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
