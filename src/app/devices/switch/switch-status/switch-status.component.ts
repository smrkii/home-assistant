import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SwitchStatus } from '../../../../core/api/devices/shelly1/shelly1.model';
import { ShellyApiService } from '../../../shared/shelly-api.service';

@Component({
  selector: 'app-switch-status',
  templateUrl: './switch-status.component.html',
  styleUrls: ['./switch-status.component.scss']
})
export class SwitchStatusComponent implements OnInit {
  @Input() deviceId: string;
  switchStatus: SwitchStatus;
  public isCollapsed = false;


  constructor(private shellyApi: ShellyApiService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) { }




  ngOnInit(): void {
    this.shellyApi.relayStatus(this.deviceId).subscribe(
      (response) => {
        this.switchStatus = response;

      },(error)=>{
        this.toastr.error(error.message, 'Error occured!');
      }
    )

  }



}
