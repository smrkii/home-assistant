import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Device } from '../../../core/api/devices/device.model';
import { ChangeSwitch, SwitchStatus} from '../../../core/api/devices/shelly1/shelly1.model';
import { ShellyApiService } from '../../shared/shelly-api.service';
import { DevicesService } from '../devices.service';
import { SwitchStatusComponent } from './switch-status/switch-status.component';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input('deviceProps') deviceProps: Device
  @Input('deviceStatus') deviceStatus: SwitchStatus


  state: string = 'off';
  changeSwitch: ChangeSwitch = null;
  closeResult = '';

  constructor(private shellyApi: ShellyApiService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private deviceService: DevicesService) { }

  ngOnInit(): void {
  }

  onSwitchClick(event: Event){
    var sendStat = this.state === 'off' ? 'on' : 'off'

     this.shellyApi.relayControll(0,sendStat,this.deviceProps.id).subscribe(
      (response) => {this.changeSwitch = response
        this.state = sendStat;
        (event.target as HTMLInputElement).checked = this.state === 'off' ? false : true
        //this.toastr.success('Hello world!', 'Toastr fun!');
      },
      (error) => {
        console.log(error);

        (event.target as HTMLInputElement).checked = this.state === 'off' ? false : true
        this.toastr.error(error.message, 'Toastr fun!');
      }
    );
  }

  openStatusModal(){
    const modal = this.modalService.open(SwitchStatusComponent);
    modal.componentInstance.deviceId = this.deviceProps.id
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
