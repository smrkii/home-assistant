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
        timer_group:{
          timer_group_on:{
            auto_on:devices[this.deviceId].onTimer.active,
            auto_on_seconds:devices[this.deviceId].onTimer.seconds
          },
          timer_group_off:{
            auto_off:devices[this.deviceId].offTimer.active,
            auto_off_seconds:devices[this.deviceId].offTimer.seconds
          }
        }
      })
    },0);
  }

  iconCollapse: string = 'icon-arrow-up';


  onPowerOnDefaultModeChanged(value: Event){
    var devices = JSON.parse(localStorage.getItem('devices'));
    this.shellyApi.postSwitchDefaultState((value.target as HTMLInputElement).value, this.deviceId).subscribe(
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
    this.shellyApi.postSwitchButtonType((value.target as HTMLInputElement).value, this.deviceId).subscribe(
      (response) => {
        devices[this.deviceId].buttonType = (value.target as HTMLInputElement).value
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Button type changed.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onTimerOffChanged(){
    var devices = JSON.parse(localStorage.getItem('devices'));

    var seconds: number = 0;
    if(this.form.form.value.timer_group.timer_group_off.auto_off !== false){
      seconds = this.form.form.value.timer_group.timer_group_off.auto_off_seconds
    }


    this.shellyApi.postSwitchTimer(
      seconds.toString(),
      this.deviceId,
      "off"
    ).subscribe(
      (response) => {
        devices[this.deviceId].offTimer.active = this.form.form.value.timer_group.timer_group_off.auto_off
        devices[this.deviceId].offTimer.seconds = this.form.form.value.timer_group.timer_group_off.auto_off_seconds
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Timer off set.', 'Success');
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      }
    )
  }

  onTimerOnChanged(){
    var devices = JSON.parse(localStorage.getItem('devices'));

    var seconds: number = 0;
    if(this.form.form.value.timer_group.timer_group_on.auto_on !== false){
      seconds = this.form.form.value.timer_group.timer_group_on.auto_on_seconds
    }


    this.shellyApi.postSwitchTimer(
      seconds.toString(),
      this.deviceId,
      "on"
    ).subscribe(
      (response) => {
        devices[this.deviceId].onTimer.active = this.form.form.value.timer_group.timer_group_on.auto_on
        devices[this.deviceId].onTimer.seconds = this.form.form.value.timer_group.timer_group_on.auto_on_seconds
        localStorage.setItem("devices", JSON.stringify(devices));

        this.toastr.success('Timer on set.', 'Success');
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
