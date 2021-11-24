import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Group, SwitchesGroup } from '../../../core/api/groups/group.model';
import { ShellyApiService } from '../../shared/shelly-api.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input('groupProps') groupProps: Group;
  @Input('devices') devices: {}
  state: string = 'off';
  @ViewChild("switch") switch: ElementRef;
  groupDevices = new Array();

  constructor(private shellyApi: ShellyApiService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.state = 'off';
  }

  ngAfterViewInit() {

    this.switch.nativeElement.checked =  false;

    for (const [key, value] of Object.entries(this.groupProps.devices)) {
      this.groupDevices.push({id: value, status: this.devices[value].status.relays[0].ison})

      if(this.devices[value].status.relays[0].ison == true){
        this.switch.nativeElement.checked =  true;
        this.state = 'on';
      }

    }


  }

  onSwitchClick(event: Event){
    var devicesId = new Array();

    for(let i = 0; i< this.groupDevices.length;i++){
      devicesId.push(new SwitchesGroup(this.groupDevices[i].id,0))
    }

    var sendStat = this.state === 'off' ? 'on' : 'off'

     this.shellyApi.switchesGroupControl(devicesId,sendStat).subscribe(
      (response) => {
        this.state = sendStat;
        this.switch.nativeElement.checked = this.state === 'off' ? false : true
        //this.toastr.success('Hello world!', 'Toastr fun!');
      },
      (error) => {
        console.log(error);

        this.switch.nativeElement.checked = this.state === 'off' ? false : true
        this.toastr.error(error.message, 'Toastr fun!');
      }
    );
  }






}
