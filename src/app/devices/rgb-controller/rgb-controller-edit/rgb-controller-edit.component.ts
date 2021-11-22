import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal,NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SwitchStatus } from '../../../../core/api/devices/shelly1/shelly1.model';
import { ShellyApiService } from '../../../shared/shelly-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rgb-controller-edit',
  templateUrl: './rgb-controller-edit.component.html',
  styleUrls: ['./rgb-controller-edit.component.scss']
})
export class RgbControllerEditComponent implements AfterViewInit {
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
        power_on_default_mode_group:{
          power_on_default_mode: devices[this.deviceId].powerOnDefaultMode
        },
        button_type_group:{
          button_type: devices[this.deviceId].buttonType
        },
        transition_time_group:{
          transition_time: devices[this.deviceId].transitionTime
        },
        dc_power_group:{
          dc_power: devices[this.deviceId].dcPower
        }
      })
    },0);
  }

  iconCollapse: string = 'icon-arrow-up';


  onPowerOnDefaultModeChanged(value: Event){
    var devices = JSON.parse(localStorage.getItem('devices'));
    this.shellyApi.postLightDefaultState((value.target as HTMLInputElement).value, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].powerOnDefaultMode = (value.target as HTMLInputElement).value
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Power on default mode changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onButtonTypeChanged(value: Event){
    var devices = JSON.parse(localStorage.getItem('devices'));
    this.shellyApi.postLightButtonType((value.target as HTMLInputElement).value, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].buttonType = (value.target as HTMLInputElement).value
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Button type changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onTransitionTimeChanged(){
    var devices = JSON.parse(localStorage.getItem('devices'));

    this.shellyApi.postRgbwTransition(this.form.form.value.transition_time_group.transition_time, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].transitionTime = this.form.form.value.transition_time_group.transition_time
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Transition changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onDcPowerChanged(value: Event){
    var devices = JSON.parse(localStorage.getItem('devices'));
    this.shellyApi.postDcPower((value.target as HTMLInputElement).value, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].dcPower = (value.target as HTMLInputElement).value
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Dc power changed.', 'Success');
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
