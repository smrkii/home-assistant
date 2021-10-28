import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ChangeSwitch, Status } from '../../../core/api/devices/shelly1/shelly1.model';
import { ShellyApiService } from '../../shared/shelly-api.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  state: string = 'off';
  changeSwitch: ChangeSwitch = null;
  status: Status = null;

  constructor(private shellyApi: ShellyApiService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  onClick(event: Event){

    var sendStat = this.state === 'off' ? 'on' : 'off'

    this.shellyApi.relayControll(0,sendStat,'E8db84d28717').subscribe(
      (response) => {this.changeSwitch = response
        this.state = sendStat;
        (event.target as HTMLInputElement).checked = this.state === 'off' ? false : true
        this.toastr.success('Hello world!', 'Toastr fun!');
      },
      (error) => {
        console.log(error);

        (event.target as HTMLInputElement).checked = this.state === 'off' ? false : true
        this.toastr.error(error.message, 'Toastr fun!');
      }
    );

    /*
    this.shellyApi.relayStatus('E8db84d28717').subscribe(
      response => {this.status = response
      console.log(this.status);
      },
      (error) => {}
    );
      */
  }


}
